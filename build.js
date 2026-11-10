const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const outDir = path.join(__dirname, 'public');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const items = [
  'index.html',
  'career-life.html',
  'venture-lab.html',
  'fetho-production.css',
  'fetho-tokens.css',
  'fetho.bundle.js',
  'gradient-waves.bundle.js',
  'Astronaut.glb',
  'about',
  'assets',
  'design-articles',
  'design-development-process',
  'fonts',
  'images',
  'vendor',
  'videos',
  'web-design-cost',
  'web-design-projects',
  'wp-content'
];

for (const item of items) {
  const src = path.join(srcDir, item);
  const dest = path.join(outDir, item);
  if (fs.existsSync(src)) {
    fs.cpSync(src, dest, { recursive: true, force: true });
  }
}

console.log('Build complete: all static assets prepared in public/');

