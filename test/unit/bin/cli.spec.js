const sinon = require("sinon");

const lib = require('../../../src/lib/index.js');

describe('cli', () => {

    const folder = 'whatever';
    let expectCwd, getFolder, die;

    beforeEach(() => {
        die = sinon.stub(lib, 'die').callsFake(() => { });
        getFolder = sinon.stub(lib, 'getFolder').returns(folder);
        expectCwd = sinon.stub(lib, 'expectCwd').callsFake(() => { });
    });

    afterEach(() => {
        getFolder.restore();
        expectCwd.restore();
    });

    it('cli - parses the command line arguments and calls the expect-cwd function', () => {
        require('../../../src/bin/cli');

        sinon.assert.calledOnceWithExactly(getFolder);
        sinon.assert.calledOnceWithExactly(expectCwd, folder, die);
    });
})
