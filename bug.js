
console.log('\n process.env.PORT_ENV =', process.env.PORT_ENV);

// console.log('\n process.env =', process.env);



/*

./node_modules/cross-env/src/bin/cross-env.js PORT_ENV=666 && node ./bug.js

./node_modules/cross-env/src/bin/cross-env.js PORT_ENV=666
node ./bug.js


./node_modules/cross-env/src/bin/cross-env-shell.js PORT_ENV=666 && node ./bug.js

./node_modules/cross-env/src/bin/cross-env-shell.js PORT_ENV=666
node ./bug.js


node ./node_modules/cross-env/src/index.js PORT_ENV=666 && node ./bug.js

node ./node_modules/cross-env/src/index.js PORT_ENV=666
node ./bug.js

*/


/*


export PORT_ENV=999 && node ./bug.js

export PORT_ENV=999
node ./bug.js

*/



// ./node_modules/shelljs/bin/shjs PORT_ENV=8090 && node ./test.js

// ./node_modules/shelljs/src/exec.js

// node_modules/shelljs/shell.js


/*

https://github.com/xgqfrms/set-process-env/issues/3#issuecomment-943414882

// 不同的 node.js child process env bug ???

spe PORT_ENV=8090 && node ./bug.js

spe PORT_ENV=8090 && node -e "console.log('PORT_ENV =', process.env.PORT_ENV);"


*/
