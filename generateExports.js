import * as fs from 'node:fs';
import * as path from 'node:path';

function readFiles(dirName) {
  fs.readdir(dirName, (err, files) => {
    if (err) {
      return err;
    }

    files.filter(file => file !== 'index.js');

    let exportData = '';

    files.forEach(file => {
      const fileName = path.parse(file).name;
      exportData += `export { default as ${fileName}} from "./${fileName}"; \n`;
    });

    try {
      fs.writeFileSync('./utils/index.js', exportData, 'utf8');
    } catch (err) {
      console.error(err);
    }
  });
}

readFiles('utils');
