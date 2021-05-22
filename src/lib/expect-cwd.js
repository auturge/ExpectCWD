const fs = require('fs');
const isValidPath = require('is-valid-path');
const path = require('path');
const process = require('process');

function expectCwd(folder, failure) {
    if (typeof folder === undefined || folder === undefined)
        throw new Error('The directory argument must not be undefined.');
    if (folder === null)
        throw new Error('The directory argument must not be null.');
    if (folder === "")
        throw new Error('The directory argument must not be an empty string.');
    if (failure == null || typeof failure !== 'function')
        throw new Error('The failure argument must be a function.');

    const cwd = process.cwd();
    const target = path.join(process.env.INIT_CWD, folder);

    if (!isValidPath(target))
        throw new Error(`The specified directory is not a valid path: [${ target }]`);
    if (!fs.existsSync(target)) {
        throw new Error(`The specified directory does not exist: [${ target }]`);
    }

    if (cwd != target) {
        console.error(`Change to the '${ folder }' folder before executing this command.`);
        console.error(' ');
        failure();
    }
}

module.exports = { expectCwd };
