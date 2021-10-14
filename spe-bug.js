const shell = require("shelljs");

const key = 'PORT_ENV';
const env = 8888;

// const command = `export ${key}=${env}`;
// const command = `set ${key}=${env}`;

// 命令 & 参数 分隔符号
// const command = 'export "PORT_ENV=8888"';
const command = 'export PORT_ENV=8888';

// shelljs 执行 command

shell.exec('whoami');
shell.exec('which sh');
shell.exec('which bash');
// shell.exec('pwd');
// shell.exec('ls -al');
shell.exec(command);
// shell.exec('export', 'PORT_ENV=8888');

// ??? （追加）写入到 .zshrc 文件
// export PORT_ENV="8888"
// source ~/.profile
// source ~/.bash_profile

// export ZSH="/Users/xgqfrms/.oh-my-zsh"



console.log('\n command =', command);
// console.log('\n PORT_ENV =', PORT_ENV);
console.log('\n process.env.PORT_ENV =', process.env.PORT_ENV);
