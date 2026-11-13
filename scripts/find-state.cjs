const fs = require('fs');
const html = fs.readFileSync('F:/cars-energy/scripts/thrifty.html', 'utf8');

// Look for script tags with JSON
const jsonScripts = html.match(/<script[^>]*type=["']application\/json["'][^>]*>([\s\S]*?)<\/script>/gi);
console.log('JSON scripts found:', jsonScripts ? jsonScripts.length : 0);

// Look for window.__INITIAL_STATE__ or similar
const stateMatch = html.match(/(?:window\.__[A-Z0-9_]+__\s*=\s*|data-preloaded=["'])([\s\S]{0,1000})/i);
if (stateMatch) {
  console.log('State match:', stateMatch[0].slice(0, 500));
}

// Search for any mention of preview or juice
const juiceMatches = html.match(/.{0,50}(?:preview|thrifty|juice).{0,50}/gi);
if (juiceMatches) {
  console.log('Mentions:', juiceMatches.slice(0, 10));
}
