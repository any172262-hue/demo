const https = require('https');

function fetchUrl(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirect to:', res.headers.location);
      fetchUrl(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      // look for demo links or preview URLs
      const matches = data.match(/https:\/\/[^"'\s<>]+(?:preview|demo|thrifty)[^"'\s<>]*/gi);
      if (matches) {
        console.log('Matches found:');
        matches.slice(0, 15).forEach(m => console.log(m));
      } else {
        console.log('No matches');
      }
    });
  }).on('error', err => console.error(err));
}

fetchUrl('https://ecosystem.hubspot.com/marketplace/website-themes/thrifty-by-juice-tactics-snacks-255530');
