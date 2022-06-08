import inquirer from 'inquirer';
import GlobPrompt from 'inquirer-glob-prompt';
import { inspect } from 'util';

inquirer.registerPrompt('glob', GlobPrompt);

let answers = await inquirer.prompt([{
  type: 'glob',
  name: 'filePaths',
  message: 'Which files?',
  default: 'cypress/plugins/index.js',
  glob: {
    ignore: 'node_modules'
  }
}]);

console.log(inspect(answers, { colors: true }));
