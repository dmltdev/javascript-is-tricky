import * as fs from 'node:fs';
import * as path from 'node:path';
import { promisify } from 'node:util';

const readdirAsync = promisify(fs.readdir);
const lstatAsync = promisify(fs.lstat);

export async function generateExports(dirName) {
  try {
    const files = await readdirAsync(dirName);

    let exportData = '';

    for (const file of files) {
      if (file === 'index.js') continue;

      const filePath = path.join(dirName, file);
      const stats = await lstatAsync(filePath);

      const isFile = stats.isFile();

      if (isFile) {
        const fileName = path.parse(file).name;
        exportData += `export { default as ${fileName}} from "./${fileName}.js"; \n`;
      }
    }

    fs.writeFileSync('./utils/index.js', exportData, 'utf8');
  } catch (err) {
    console.error(err);
  }
}

generateExports('utils');
// fs.readdir('utils', (err, files) => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   for (const file of files) {
//     const filePath = path.join('utils', file);
//     if (!filePath.endsWith('.js')) {
//       generateExports(filePath);
//     }
//   }
// });
