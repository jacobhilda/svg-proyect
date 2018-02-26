var page = require('webpage').create();
var url = 'http://localhost:57165/html/6e6b2a65-513e-4232-a2b3-f8d2d620ba11.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\6e6b2a65-513e-4232-a2b3-f8d2d620ba11.jpg');

    phantom.exit();
});