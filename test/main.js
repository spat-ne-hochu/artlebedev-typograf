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

    it('remove typograf invalid url', function(done) {
        var typo = require('../artlebedev-typograf');

        typo._setServiceUrl('http://localhost:8080/dev/null');
        typo.encode(IN_STRING, function(err) {
            if (err) {
                done();
            }
        });
    });
});