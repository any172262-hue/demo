const fs = require('fs');
const path = require('path');

function findImages(dir) {
  let images = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'dist' && entry.name !== '.git') {
      images = images.concat(findImages(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx') || entry.name.endsWith('.js') || entry.name.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s\"\'\`,]+/g);
      if (matches) {
        matches.forEach(url => {
          images.push({ file: path.relative('F:/cars-energy', fullPath), url: url.split('?')[0] });
        });
      }
    }
  }
  return images;
}

const allImages = findImages('F:/cars-energy/src');
console.log('Total images found in src:', allImages.length);

const urlMap = {};
allImages.forEach(({ file, url }) => {
  if (!urlMap[url]) urlMap[url] = [];
  urlMap[url].push(file);
});

console.log('\n--- Duplicate URLs ---');
let duplicates = 0;
for (const [url, files] of Object.entries(urlMap)) {
  if (files.length > 1) {
    duplicates++;
    console.log(url, 'used in:', files);
  }
}
if (duplicates === 0) {
  console.log('ZERO DUPLICATES FOUND! ALL UNIQUE.');
} else {
  console.log('Total duplicate URLs:', duplicates);
}

console.log('\n--- All Unique Image Photo IDs ---');
Object.keys(urlMap).forEach((url, i) => {
  console.log(`${i + 1}. ${url} (${urlMap[url].join(', ')})`);
});
