var page = require('webpage').create();
var url = 'http://localhost:57165/html/73478b18-b844-4108-818b-a5e5529811f8.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\73478b18-b844-4108-818b-a5e5529811f8.jpg');

    phantom.exit();
});