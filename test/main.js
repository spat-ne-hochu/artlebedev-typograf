var assert = require('assert'),

    IN_STRING  = 'my name is "victory"';
    OUT_STRING = 'my&nbsp;name is&nbsp;&laquo;victory&raquo;';

describe('main test', function() {
    it('remove typograf encode string one', function(done) {
        var typo = require('../artlebedev-typograf');
        typo.encode(IN_STRING, function(err, result) {
            if (! err) {
                assert.equal(result, OUT_STRING);
                done();
            }
        });
    });
});