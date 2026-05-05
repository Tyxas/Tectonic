const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');
const fontImport = "@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,900;1,700&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Barlow:wght@300;400;500&display=swap');\n";
if (!css.includes('@import url')) {
  css = fontImport + css;
}
fs.writeFileSync('src/app/globals.css', css);
console.log('Added fonts to globals.css');
