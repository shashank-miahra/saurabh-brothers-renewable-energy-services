const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/layout.js',
  'src/app/page.js',
  'src/components/Hero.js',
  'src/components/AboutFounder.js',
  'src/components/LeadForm.js',
  'src/app/about/page.js'
];

const replacements = [
  { search: /amber-500/g, replace: 'brand-primary' },
  { search: /amber-600/g, replace: 'brand-primary' },
  { search: /amber-400/g, replace: 'brand-primary' },
  { search: /amber-100/g, replace: 'brand-primary\/20' },
  { search: /amber-50/g, replace: 'brand-primary\/10' },
  { search: /slate-900/g, replace: 'brand-darker' },
  { search: /slate-800/g, replace: 'brand-dark' },
  { search: /slate-600/g, replace: 'brand-gray' },
  { search: /slate-50/g, replace: 'brand-light' }
];

filesToUpdate.forEach(file => {
  const rootDir = process.cwd();
  const filePath = path.resolve(rootDir, file);
  if (!filePath.startsWith(`${rootDir}${path.sep}`)) {
    throw new Error(`Refusing to update file outside project: ${file}`);
  }

  console.log('Processing', filePath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(rule => {
      content = content.replace(rule.search, rule.replace);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Successfully updated ${file}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});
