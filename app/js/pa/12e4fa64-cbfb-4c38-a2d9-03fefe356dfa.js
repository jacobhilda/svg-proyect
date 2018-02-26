var page = require('webpage').create();
var url = 'http://localhost:57165/html/1e578a7c-e28b-488d-ac03-c8647de4bcd9.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\1e578a7c-e28b-488d-ac03-c8647de4bcd9.jpg');

    phantom.exit();
});