# set-process-env

> set-process-env by linux bash command without need git ignore the .env file

[https://www.npmjs.com/package/set-process-env](https://www.npmjs.com/package/set-process-env)

## install

```sh
$ yarn global add set-process-env
# OR
$ npm i -g set-process-env

```

## usage


```sh
# PORT_ENV for webpack & npm script dev
$ spe PORT_ENV=8090

```

> demo

```js
// package.json

// ⚠️ precondition (cross-env@5.2.0, &  npm scripts has dev command)
// ⚠️ 前置条件 (cross-env@5.2.0 & npm scripts has dev command)

{
  // ...
  "scripts": {
    "dev": "webpack-dev-server --inline",
    // "dev": "cross-env NODE_OPTIONS='--max-old-space-size=8192' cross-env NODE_ENV=development webpack-dev-server --inline",
    // ...
  },
  // ...
}

```

```js
// webpack.config.js
const PORT = process.env.PORT_ENV || 8080;

console.log('PORT_ENV =', process.env.PORT_ENV);
// console.log('\n process.env.PORT_ENV =', process.env.PORT_ENV);
// console.log('\n process.env.NODE_ENV =', process.env.NODE_ENV);
// console.log('\n process.env.NODE_OPTIONS =', process.env.NODE_OPTIONS);
// console.log('\n ✅ ');

// const ip = require('ip');
// const hostIp = ip.address();
const config = {
  // ...
  devServer: {
    // ...
    // host: hostIp,
    port: PORT_ENV || 8080,
    proxy: [
      {
        context: ['/web/api/'],
        // dev
        target: 'https://web-dev.xgqfrms.xyz',
        // prod
        // target: 'https://web-prod.xgqfrms.xyz',
      },
    ],
  },
};

module.exports = config;

```


![image](https://user-images.githubusercontent.com/7291672/137370844-316bfd5e-fe0f-4e89-ab68-c937ee355a9b.png)



## multi env 

```sh
$ spe PORT_ENV=8090 PROXY_ENV=pre

```

![image](https://user-images.githubusercontent.com/7291672/137433698-23f62ecd-f59d-4f72-a3a6-14b1a27cfb12.png)

![image](https://user-images.githubusercontent.com/7291672/137434750-e19f15bb-2b7b-4c19-9671-513b94b67563.png)

## Travis CI


https://travis-ci.org/xgqfrms/set-process-env/builds

https://www.cnblogs.com/xgqfrms/p/12851281.html
      
## refs

https://www.npmjs.com/package/app-node-env



<!-- 


$ spe PORT_ENV=8090

$ spe PORT_ENV=8090 PROXY_ENV=pre

 -->
