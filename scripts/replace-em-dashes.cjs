const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const targetExtensions = ['.ts', '.tsx', '.json', '.md', '.html', '.js'];
const ignoreDirs = ['node_modules', '.git', 'dist'];

let totalFilesModified = 0;
let totalReplacements = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (ignoreDirs.includes(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (targetExtensions.includes(path.extname(entry.name))) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('—')) {
    // Replace em dashes with standard hyphens
    // e.g. " • RFC —" -> " • RFC -", "word—word" -> "word - word"
    const occurrences = (content.match(/—/g) || []).length;
    // Replace " —" with " -"
    content = content.replace(/ —/g, ' -');
    // Replace "— " with "- "
    content = content.replace(/— /g, '- ');
    // Replace remaining bare "—" with " - "
    content = content.replace(/—/g, ' - ');
    fs.writeFileSync(filePath, content, 'utf-8');
    totalFilesModified++;
    totalReplacements += occurrences;
    console.log(`Updated: ${path.relative(rootDir, filePath)} (${occurrences} replacements)`);
  }
}

walk(rootDir);
console.log(`\nCompleted! Modified ${totalFilesModified} files with ${totalReplacements} em dash replacements.`);
