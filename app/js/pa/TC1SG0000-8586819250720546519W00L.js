var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-8586819250720546519W00L-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TC1SG0000-8586819250720546519W00L.jpg');

    phantom.exit();
});