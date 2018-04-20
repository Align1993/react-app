var http = require('http'),
    request = require('../../widget/request/request.js');
    tool = request('../../widget/tool/too.js');
    requestList = [
      {
          id: 'news',
          url: domain + '/news'
      }
    ];

    module.exports = function(req, res, next) {
        console.log(req.headers)
        var datas = [],
            arr = [];

        arr[arr.length] = new Promise(function(resolve) {
            request(domain + '/index/data?type=0', req.headers, function(data) {
                console.log(data)
                resolve()
            })
        })

        requestList.forEach(item => {
            arr[arr.length] = new Promise(function(resolve) {
                request(item.url, req.headers, function(json, err) {
                    datas[item.id] = json;
                    resolve()
                })
            })
        });
        Promise.all(arr)
               .then(function(data) {
                   res.render('index.html', datas);
               })
    }