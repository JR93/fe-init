const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

module.exports = ({ dragonName, projectName }) => {
  return new Promise((resolve, reject) => {
    const cur_dir = process.cwd();
    const configFile = path.resolve(cur_dir, './xxx.config.js');
    fs.readFile(configFile, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      const result = data.replace(/{{project_name}}/g, dragonName);

      fs.writeFile(configFile, result, 'utf8', (err) => {
        if (err) {
          reject(err);
        }
        // 修改了cdn项目名再提交
        shell.exec('git add .');
        shell.exec('git commit -m "initialize project"', { silent: true });
        shell.exec('git push -u origin master', { silent: true });
        resolve();
      });
    });
  });
};
