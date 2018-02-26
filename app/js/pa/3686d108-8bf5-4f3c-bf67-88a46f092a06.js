var page = require('webpage').create();
var url = 'http://localhost:57165/html/e162bd5a-a4e4-4a2f-acbc-d77f09519f88.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\e162bd5a-a4e4-4a2f-acbc-d77f09519f88.jpg');

    phantom.exit();
});