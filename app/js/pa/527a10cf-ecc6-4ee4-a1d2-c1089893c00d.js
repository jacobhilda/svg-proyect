var page = require('webpage').create();
var url = 'http://localhost:57165/html/103db1da-f3e4-4f62-b572-b2807a375561.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\103db1da-f3e4-4f62-b572-b2807a375561.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});