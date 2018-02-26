var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-8586819856854775808-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TC1SG0000-8586819856854775808.jpg');

    phantom.exit();
});