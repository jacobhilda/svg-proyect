var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1-8586819246754374639W-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TC1-8586819246754374639W.jpg');

    phantom.exit();
});