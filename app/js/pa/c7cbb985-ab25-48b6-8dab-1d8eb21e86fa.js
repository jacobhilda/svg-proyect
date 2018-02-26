var page = require('webpage').create();
var url = 'http://localhost:57165/html/9a50f113-1431-451d-a5fd-3c9139f1e882.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\9a50f113-1431-451d-a5fd-3c9139f1e882.jpg');

    phantom.exit();
});