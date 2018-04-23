
var request = require('../../widget/request/request.js'),
    domain = require('../domain.js');
    requestList = [
      {
          id: 'news',
          url: domain + '/news'
      }
    ];

    module.exports = function(req, res, next) {
        var datas = [],
            arr = [];
            fetch('../../api/getJson.json')  
            .then((res) => {return res.json(); })  
            .then((data) => {console.log(data)})  
            .catch((e) => {console.log(e.message); }); 
        // arr[arr.length] = new Promise(function(resolve) {
        //     request(domain + '../../api/getJson.json', req.headers, function(data) {
        //        console.log(data)
        //         resolve()
        //     })

            
        //     // request('http://www.layui.com/demo/table/user/?page=1&limit=10', req.headers, function(data) {
        //     //    console.log(data)
        //     //     resolve()
        //     // })
        // })

        // requestList.forEach(item => {
        //     arr[arr.length] = new Promise(function(resolve) {
        //         request(item.url, req.headers, function(json, err) {
        //             datas[item.id] = json;
        //             resolve()
        //         })
        //     })
        // });
        Promise.all(arr)
               .then(function(data) {
                   res.render('index.html', datas);
               })   
          //  res.render('index.html', {name: 'coco'}); 
            // res.sendfile('filepath')
    }