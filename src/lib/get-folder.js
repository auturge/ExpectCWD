const process = require('process');

function getFolder() {

    const [ , , ...rawArgs ] = process.argv;

    // validate the arguments
    if (rawArgs.length == 0)
        throw new Error('Must include the expected directory as the command-line argument.')
    if (rawArgs.length > 1)
        throw new Error('The only supported command-line argument is the expected directory.');

    return rawArgs[ 0 ];
}

module.exports = { getFolder };
