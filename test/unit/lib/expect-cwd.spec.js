const { assert } = require('chai');
const path = require('path');
const process = require('process');
const sinon = require("sinon");

const { expectCwd } = require('../../../src/index');

describe('expect-cwd', () => {

    const directory1 = process.cwd();
    const directory2 = __dirname;
    let error, cwd, join, failure;
    beforeEach(() => {
        error = sinon.stub(console, 'error').callsFake(() => { });
        cwd = sinon.stub(process, 'cwd').returns(directory1);
        join = sinon.stub(path, 'join').returns(directory1);
        failure = sinon.spy();
    });

    afterEach(() => {
        error.restore();
        cwd.restore();
        join.restore();
    });

    it('expect-cwd - calls failure when in the wrong folder', () => {
        const directory = `doesn't matter`;
        cwd.returns(directory1);
        join.returns(directory2);

        expectCwd(directory, failure);

        sinon.assert.calledOnceWithExactly(failure);
    });

    it('expect-cwd - does not call failure when in the proper directory', () => {
        const directory = `doesn't matter`;
        cwd.returns(directory1);
        join.returns(directory1);

        expectCwd(directory, failure);

        sinon.assert.notCalled(failure);
    });

    it('expect-cwd - throws when folder argument is undefined', () => {
        let folder;
        cwd.returns(directory1);
        join.returns(directory1);

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The directory argument must not be undefined.');

        sinon.assert.notCalled(failure);
    });

    it('expect-cwd - throws when folder argument is null', () => {
        const folder = null;
        cwd.returns(directory1);
        join.returns(directory1);

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The directory argument must not be null.');

        sinon.assert.notCalled(failure);
    });

    it('expect-cwd - throws when folder argument is an empty string', () => {
        const folder = "";
        cwd.returns(directory1);
        join.returns(directory1);

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The directory argument must not be an empty string.');

        sinon.assert.notCalled(failure);
    });

    it('expect-cwd - throws when the failure argument is null', () => {
        const folder = `doesn't matter`;
        const failure = null;
        cwd.returns(directory1);
        join.returns(directory1);

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The failure argument must be a function.');
    });

    it('expect-cwd - throws when the failure argument is not a function', () => {
        const folder = `doesn't matter`;
        const failure = { failure: () => { } };
        cwd.returns(directory1);
        join.returns(directory1);

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The failure argument must be a function.');
    });

    it('expect-cwd - throws when the specified folder does not exist', () => {
        const folder = `doesn't matter!`;
        cwd.returns(directory1);
        join.returns(__dirname + "A folder which must not exist");

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The specified directory does not exist.');

        sinon.assert.notCalled(failure);
    });

    it('expect-cwd - throws when the specified folder is not a valid path', () => {
        const folder = `doesn't matter!`;
        cwd.returns(directory1);
        join.returns("!invalidPath (because of !)");

        assert.throws(() => {
            expectCwd(folder, failure);
        }, 'The specified directory is not a valid path.');

        sinon.assert.notCalled(failure);
    });
})
