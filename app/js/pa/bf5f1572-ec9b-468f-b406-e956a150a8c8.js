var page = require('webpage').create();
var url = 'http://localhost:57165/html/04554f44-f5f8-4941-a799-e7833f7cd90c.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\04554f44-f5f8-4941-a799-e7833f7cd90c.jpg');

    phantom.exit();
});