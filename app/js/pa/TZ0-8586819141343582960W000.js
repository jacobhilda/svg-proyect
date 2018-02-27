var page = require('webpage').create();
var url = 'http://localhost:57165/html/TZ0-8586819141343582960W000-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TZ0-8586819141343582960W000.jpg');

    phantom.exit();
});