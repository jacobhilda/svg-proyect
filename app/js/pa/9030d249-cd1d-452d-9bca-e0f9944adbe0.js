var page = require('webpage').create();
var url = 'http://localhost:57165/html/d42a4f95-0c08-4ffa-8705-6f089c96aa78.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\d42a4f95-0c08-4ffa-8705-6f089c96aa78.jpg');

    phantom.exit();
});