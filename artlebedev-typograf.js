var SERVICE_URL     = 'http://www.artlebedev.ru/tools/typograf/',
    USER_AGENT      = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36',
    RESULT_SELECTOR = '#oCode > textarea';

var request = require('request'),
    cheerio = require('cheerio');

function encode(text, callback) {
    request.post({
        url  : SERVICE_URL,
        headers : {
            'Referer'    : SERVICE_URL,
            'User-Agent' : USER_AGENT
        },
        form : {
            doTypa : 1,
            msg    : text,
            decode : 'do'
        }
    }, function(err, res, body) {
        if (! err) {
            $ = cheerio.load(body);
            callback(undefined, $(RESULT_SELECTOR).text());
        } else {
            callback(err);
        }
    });
}

function _setServiceUrl(url) {
    SERVICE_URL = url;
}

module.exports.encode = encode;
module.exports._setServiceUrl = _setServiceUrl;
