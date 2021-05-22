const { assert } = require('chai');
const process = require('process');
const sinon = require("sinon");

const { die } = require('../../../src/lib');

describe('die', () => {

    let exit, exitCode;

    beforeEach(() => {
        exit = sinon.stub(process, 'exit').callsFake(
            (code) => { exitCode = code; });
    });

    afterEach(() => {
        exit.restore();
    });

    it('die - calls process.exit(1)', () => {
        die();

        sinon.assert.calledOnceWithExactly(exit, 1);
        assert.equal(exitCode, 1);
    });
})
