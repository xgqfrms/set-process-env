"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2021.10.14
 * @modified
 *
 * @description PORT_ENV Generator
 * @augments
 * @example spe env=dev
 * @link
 * @solutions
 *
 */

// const log = console.log;

const fs = require("fs");

// const filename = "../env.js";
const filename = "./env.js";

let env = ``;

const args = process.argv.slice(2);
if (args[0]) {
    env = args[0].substr(4);
}  else {
    // default
    env = `dev`;
}

const SET_PROCESS_ENV = () => {
    console.log(`filename =`, filename);
    fs.open(filename, "r", (err, fd) => {
        console.log("PORT_ENV =", env);
        if (err) {
            console.log("PORT_ENV Error", err);
            fs.writeFile(filename, `const PORT_ENV = "${env}";\nexport default PORT_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        } else {
            console.log("PORT_ENV OK");
            fs.writeFile(filename, `const PORT_ENV = "${env}";\nexport default PORT_ENV;`, (err, fd) => {
                if(err) {
                    console.log(`writeFile err =`, err);
                }
            });
        }
    });
};

const SPE = SET_PROCESS_ENV;

// export default SPE;
module.exports = SPE;


