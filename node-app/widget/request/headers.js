var headerConfig = {
   debug: 0,
   key: 'liujun',
   ver : '1.0',
   ctype :1,
   md5 : require('../md5/md5')
}

function headers(cookie) {
    var cookies = {},
        parts;
    if(cookie) {
        cookie.split(';').forEach(element => {
            parts = element.split('=');
            cookies[parts[0].trim()] = (parts[1] || '').trim();
        });
    }

    var time = Date.parse(new Date()) / 1000;
    var sign = md5(time + headerConfig.key);
    var headers = {
        sign: headerConfig.sign,
        time: time,
        ver: headerConfig.ver,
        version: version,
        ctype: headerConfig.ctype,
        key: headerConfig.key,
        city: cookies.city || '',
        sid: cookies.sid || '',
        "User-Agent": 'request'
    }
    return headers;
}

module.exports = headers;