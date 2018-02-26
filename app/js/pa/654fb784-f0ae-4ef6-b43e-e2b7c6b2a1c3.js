var page = require('webpage').create();
var url = 'http://localhost:57165/html/0754bbdf-4bcd-40aa-be16-6930f041ae2e.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\0754bbdf-4bcd-40aa-be16-6930f041ae2e.jpg');

    phantom.exit();
});