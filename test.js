#!/usr/bin/env node


// PORT_ENV=8090 && node ./test.js

// console.log('process =', process);
// console.log('process.env =', process.env);

console.log('PORT_ENV =', process.env.PORT_ENV);
console.log('NODE_ENV =', process.env.NODE_ENV);

/*

PORT_ENV = undefined
NODE_ENV = undefined

*/


// macOS / Linux 💻
// export PORT_ENV=8090 && node ./test.js

// Windows / PowerShell
// set PORT_ENV=8090 && node ./test.js
// $env:PORT_ENV=8090 && node ./test.js

/*

PORT_ENV = 8090
NODE_ENV = undefined

*/

// check windows or mac ???
console.log('process.arch =', process.arch);
console.log('process.platform =', process.platform === 'darwin' ? 'macOS' : 'Windows');
// arch: 'x64',
// platform: 'darwin',


// ❌
// ./node_modules/cross-env/dist/bin/cross-env.js PORT_ENV=8090 && node ./test.js

// ✅
// ./node_modules/cross-env/src/bin/cross-env.js PORT_ENV=8090 && node ./test.js


/*

PORT_ENV = 8090
NODE_ENV = undefined

*/
