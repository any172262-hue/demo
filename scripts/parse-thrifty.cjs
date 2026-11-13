const fs = require('fs');
const html = fs.readFileSync('F:/cars-energy/scripts/thrifty.html', 'utf8');

const regex = /https:\/\/[^"'\s<>]+\.(?:png|jpg|jpeg|webp|svg)/gi;
const matches = [...new Set(html.match(regex) || [])];
console.log('Image links in thrifty.html:');
matches.forEach(m => console.log(m));

const previewRegex = /href=["'](https:\/\/[^"'\s<>]+)["']/gi;
let m;
console.log('\nHref links:');
while ((m = previewRegex.exec(html)) !== null) {
  if (m[1].includes('preview') || m[1].includes('demo') || m[1].includes('hubspot') || m[1].includes('juice') || m[1].includes('marketplace')) {
    console.log(m[1]);
  }
}
