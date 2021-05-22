const process = require('process');

function die() {
    process.exit(1);
}

module.exports = { die };
