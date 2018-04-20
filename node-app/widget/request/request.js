var request = require('request');

function getRequest(url, headers, cb) {
    request({
        url: url,
        formData: '',
        headers: require('./headers')(headers.cookies || {})
    }, function (err, res, data) {
        if(!err && res.statusCode === 200) {
            var json = {};
            try {
                json = JSON.parse(data)
            } catch (e) {
                err = true
            }
        }
        cb && cb(json, err, data)
    })
}

module.exports = getRequest;