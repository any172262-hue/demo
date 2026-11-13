const fs = require('fs');
const path = require('path');

const target = path.join(__dirname, '..', 'node_modules', 'rollup', 'dist', 'native.js');
const content = "module.exports = require('@rollup/wasm-node/dist/native.js');\n";

if (fs.existsSync(path.dirname(target))) {
  fs.writeFileSync(target, content, 'utf-8');
  console.log('[POSTINSTALL] Successfully configured Rollup WASM compatibility layer.');
}
