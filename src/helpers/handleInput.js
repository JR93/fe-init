const inquirer = require('inquirer');

module.exports = {
  projectName: () => {
    return new Promise((resolve, reject) => {
      const questions = [
        {
          type: 'input',
          name: 'name',
          message: "请输入项目名："
        }
      ];
      inquirer.prompt(questions)
        .then(result => {
          resolve(result.name);
        });
    });
  },
  selectType: () => {
    return new Promise((resolve, reject) => {
      const questions = [
        {
          type: 'list',
          name: 'type',
          message: "请选择项目类型(mobile: 移动端 | pc: PC端 | both: 移动&PC端)",
          choices: [
            'mobile',
            'pc',
            'both'
          ]
        }
      ];
      inquirer.prompt(questions)
        .then(result => {
          resolve(result.type);
        });
    });
  },
};
