#!/usr/bin/env node

const {
  version,
  argv,
  platform,
  // versions,
  // arch,
  // env,
} = process;

const isPureNumber = (str = '') => {
  const numberDict = [...''.padEnd(10, 'x')].map((item, i) => `${i}`);
  const arr = `${str}`.split('');
  return arr.every(item => numberDict.includes(item));
}

// for 循环 args 读取多组 env
console.log('arg =', argv);
console.log('\n');
console.log('argv[0] =', argv[0]);
console.log('argv[1] =', argv[1]);

// const args = argv.slice(1);
// const args = [...argv.slice(1)];
// const args = argv.slice(2);
const args = [...argv.slice(2)];

console.log('\n');
for (const arg of args) {
  console.log('arg =', arg);
  // obj[key] = value;
}

let commands = '';
const obj = {};

console.log('\n');
for (const [index, arg] of args.entries()) {
  console.log('arg, index =', arg, index);
  const [key, value] = arg.split('=');
  console.log('key, value =', key, value);
  // isNaN & parseInt() 10
  if(!Number.isNaN(parseInt(value))) {
    obj[key] = parseInt(value);
  } else {
    obj[key] = `${value}`;
  }
  if(isPureNumber(value)) {
    commands += ` ${key}=${value}`;
  } else {
    commands += ` ${key}='${value}'`;
  }
}

console.log('obj =', obj);
console.log('\n');
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     const value = obj[key];
//     commands += ` ${key}=${value}`;
//     // commands += ` ${key}='${value}'`;
//   }
// }

console.log('commands =', commands);

// 拼接后，直接执行
// PORT_ENV=666 PROXY_ENV='pre' npm run dev
// PORT_ENV=666 PROXY_ENV=pre npm run dev


/*

$ chmod +x ./arg.js
$ ./arg.js PORT_ENV=8090 PROXY_ENV=pre

*/



/*

$ ./arg.js PORT_ENV=8090 PROXY_ENV=pre

arg = [
  '/Users/xgqfrms-mbp/.nvm/versions/node/v12.18.0/bin/node',
  '/Users/xgqfrms-mbp/Documents/GitHub/set-process-env/arg.js',
  'PORT_ENV=8090',
  'PROXY_ENV=pre'
]


argv[0] = /Users/xgqfrms-mbp/.nvm/versions/node/v12.18.0/bin/node
argv[1] = /Users/xgqfrms-mbp/Documents/GitHub/set-process-env/arg.js


arg = PORT_ENV=8090
arg = PROXY_ENV=pre


arg, index = PORT_ENV=8090 0
key, value = PORT_ENV 8090
arg, index = PROXY_ENV=pre 1
key, value = PROXY_ENV pre
obj = { PORT_ENV: 8090, PROXY_ENV: 'pre' }


commands =  PORT_ENV=8090 PROXY_ENV='pre'


*/
