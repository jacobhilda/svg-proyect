var page = require('webpage').create();
var url = 'http://localhost:57165/html/179e0f87-0f86-4174-ab8d-d985264be8a7.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\179e0f87-0f86-4174-ab8d-d985264be8a7.jpg');

    phantom.exit();
});