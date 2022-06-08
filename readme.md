# inquirer-glob-prompt

Glob prompt for [inquirer](https://github.com/SBoudrias/Inquirer.js#readme). Prompts for a glob and lists
matching files as you type.

## Installation

``` shell
$ npm install --save inquirer-glob-prompt
```

## Usage

``` javascript
import inquirer from 'inquirer';
import GlobPrompt from 'inquirer-glob-prompt';

// you can change 'glob' to any prefered type name
inquirer.registerPrompt('glob', GlobPrompt);

let answers = await inquirer.prompt([{
  type: 'glob',
  name: 'filePaths'
  // ...
}]);

console.log(answers);
```

### Options

Takes `type`, `name`, `message`[, `default`, `when`, `pageSize`, `glob`] properties. See
[inquirer](https://github.com/SBoudrias/Inquirer.js#question) documentation for properties other than `glob`.

**glob** (Object) options are passed directly to [fast-glob](https://github.com/mrmlnc/fast-glob#readme)
during initial render and whenever input changes.

### Example

Run the [example](./example.js):

``` sh
$ node example.js
```

## License

[MIT](./LICENSE)
