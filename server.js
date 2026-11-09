const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const ROOT_DIR = __dirname;
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.ktx2': 'image/ktx2',
  '.drc': 'application/octet-stream',
  '.wasm': 'application/wasm',
  '.exr': 'image/x-exr',
  '.ogg': 'audio/ogg'
};

function transformHtml(html) {
  let transformed = html;
  
  // Replace absolute edge.studio / fetho URLs with local paths
  transformed = transformed.replace(/https:\/\/(?:edge|fetho)\.studio\//g, '/');
  
  // Ensure visibility is not stuck on hidden
  transformed = transformed.replace(
    /body\s*\{\s*visibility:\s*hidden;\s*\}/g,
    'body { visibility: visible !important; }'
  );
  
  // Inject unhide script fallback in head
  const unhideScript = `
    <script>
      (function() {
        function show() {
          if (document.body) {
            document.body.style.visibility = 'visible';
            document.body.classList.add('loaded');
          }
        }
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', show);
        } else {
          show();
        }
        setTimeout(show, 100);
      })();
    </script>
  `;
  transformed = transformed.replace('<head>', '<head>' + unhideScript);
  
  return transformed;
}

function resolveFilePath(reqPath) {
  const cleanPath = decodeURIComponent(reqPath.split('?')[0]);
  
  if (cleanPath === '/' || cleanPath === '/index.html') {
    const pubIdx = path.join(PUBLIC_DIR, 'index.html');
    if (fs.existsSync(pubIdx)) return { filePath: pubIdx, isHtml: true };
    return { filePath: path.join(ROOT_DIR, 'index.html'), isHtml: true };
  }
  
  // Check in public/
  const inPublic = path.join(PUBLIC_DIR, cleanPath.slice(1));
  if (fs.existsSync(inPublic)) {
    const stat = fs.statSync(inPublic);
    if (stat.isDirectory()) {
      const idx = path.join(inPublic, 'index.html');
      if (fs.existsSync(idx)) return { filePath: idx, isHtml: true };
    } else {
      return { filePath: inPublic, isHtml: inPublic.endsWith('.html') };
    }
  }

  // Check in root dir
  const inRoot = path.join(ROOT_DIR, cleanPath.slice(1));
  if (fs.existsSync(inRoot)) {
    const stat = fs.statSync(inRoot);
    if (stat.isDirectory()) {
      const idx = path.join(inRoot, 'index.html');
      if (fs.existsSync(idx)) return { filePath: idx, isHtml: true };
    } else {
      return { filePath: inRoot, isHtml: inRoot.endsWith('.html') };
    }
  }
  
  return null;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const reqPath = parsedUrl.pathname;

  // Mock WordPress AJAX and API calls gracefully
  if (reqPath.includes('admin-ajax.php') || reqPath.startsWith('/wp-json/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, data: [] }));
    return;
  }

  const resolved = resolveFilePath(reqPath);
  if (!resolved) {
    if (!path.extname(reqPath)) {
      const homeHtml = fs.existsSync(path.join(PUBLIC_DIR, 'index.html'))
        ? path.join(PUBLIC_DIR, 'index.html')
        : path.join(ROOT_DIR, 'index.html');
      if (fs.existsSync(homeHtml)) {
        const content = fs.readFileSync(homeHtml, 'utf8');
        res.writeHead(200, { 'Content-Type': MIME_TYPES['.html'] });
        res.end(transformHtml(content));
        return;
      }
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const { filePath, isHtml } = resolved;
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  if (isHtml) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(transformHtml(data));
    });
    return;
  }

  // Handle Range requests for video/audio streaming (e.g. mp4)
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range && ext === '.mp4') {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = (end - start) + 1;
    const fileStream = fs.createReadStream(filePath, { start, end });

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': contentType,
    });
    fileStream.pipe(res);
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n==================================================`);
    console.log(`🚀 Fetho website is running!`);
    console.log(`👉 Local URL: http://localhost:${port}`);
    console.log(`==================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
