const { assert } = require('chai');
const process = require('process');

const { getFolder } = require('../../../src/lib');

describe('getFolder', () => {

    // process.argv is an array of strings:
    //   the first element is execpath
    //   the second element is the path the the JS file being executed
    //   the remaining elements will be any additional command-line arguments

    it('getFolder - throws if parsed args array is empty', () => {
        process.argv = [
            process.argv[ 0 ], process.argv[ 1 ]
        ];

        assert.throws(() => {
            getFolder();
        }, 'Must include the expected directory as the command-line argument.');
    });

    it('getFolder - throws if more than one command-line argument is passed', () => {
        process.argv = [
            process.argv[ 0 ],
            process.argv[ 1 ],
            'maximum',
            'WAT'
        ];

        assert.throws(() => {
            getFolder();
        }, 'The only supported command-line argument is the expected directory.');
    });

    it('getFolder - returns the third argument in process.argv', () => {
        const folder = 'robble';
        process.argv = [
            process.argv[ 0 ],
            process.argv[ 1 ],
            folder
        ];

        const result = getFolder();

        assert.deepEqual(result, folder);
    });
})
