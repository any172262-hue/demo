const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const notFoundPath = path.join(distDir, '404.html');

// Create GitHub Pages SPA redirector 404.html
const spaRedirectHtml = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Maa Kamakhya Auto Gas</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
`;

fs.writeFileSync(notFoundPath, spaRedirectHtml, 'utf8');
console.log('[POSTBUILD] Created dist/404.html with GitHub Pages SPA redirector.');
