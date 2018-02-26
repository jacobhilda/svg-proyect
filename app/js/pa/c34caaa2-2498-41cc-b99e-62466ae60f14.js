var page = require('webpage').create();
var url = 'http://localhost:57165/html/7c82cbf4-0201-4902-9efa-3395ff42dcf6.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\7c82cbf4-0201-4902-9efa-3395ff42dcf6.jpg');

    phantom.exit();
});