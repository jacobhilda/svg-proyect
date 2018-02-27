var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1-8586818655120380111W00L-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TC1-8586818655120380111W00L.jpg');

    phantom.exit();
});