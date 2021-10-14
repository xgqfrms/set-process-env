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
# PORT_ENV for webpack
$ spe PORT_ENV=8090

```

> demo

```js
// webpack.config.js
const PORT = process.env.PORT_ENV || 8080;

console.log('PORT_ENV =', process.env.PORT_ENV);

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

## refs

https://www.npmjs.com/package/app-node-env

