"use strict";

var SERVICE_URL     = 'http://typograf.artlebedev.ru/webservices/typograf.asmx';

var request  = require('request'),
    Entities = require('html-entities').XmlEntities,
    entities = new Entities();

function _wrapTextInXML(text) {
    return '<?xml version="1.0" encoding="UTF-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
        'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
        'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        '<ProcessText xmlns="http://typograf.artlebedev.ru/webservices/">' +
        '<text>' + text + '</text>' +
        '</ProcessText>' +
        '</soap:Body>' +
        '</soap:Envelope>';
}

function _getResultFromXML(responseXML) {
    var res = /<ProcessTextResult>\s*((.|\n)*?)\s*<\/ProcessTextResult>/m.exec(responseXML);

    return (res && res[1]) ? entities.decode(res[1]).slice(3, -11) : null;
}

function encode(text, callback) {
    request({
        url: SERVICE_URL,
        method: "POST",
        headers: {
            "content-type": "application/xml"
        },
        body: _wrapTextInXML(text)
    }, function(err, res, body) {
        if (! err) {
            callback(undefined, _getResultFromXML(body));
        } else {
            callback(err);
        }
    });
}

function _setServiceUrl(url) {
    SERVICE_URL = url;
}

module.exports.encode            = encode;
module.exports._setServiceUrl    = _setServiceUrl;
module.exports._getResultFromXML = _getResultFromXML;
