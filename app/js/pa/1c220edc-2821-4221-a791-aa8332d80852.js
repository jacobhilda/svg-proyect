var page = require('webpage').create();
var url = 'http://localhost:57165/html/1ab44e9a-a9fb-455f-9116-8d27233a70a1.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\1ab44e9a-a9fb-455f-9116-8d27233a70a1.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});