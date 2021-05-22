const sinon = require("sinon");

/* eslint-disable */

function _stub(owner, method) {
    return sinon.stub(owner, method);
}

/** Unwraps a Sinon spy/stub, releasing the spy/stub to be spied/stubbed again. */
function _unwrap(sinonStub) {
    sinonStub.restore();
}
/* eslint-enable */


module.exports = {
    stub: _stub,
    unwrap: _unwrap
}
