var page = require('webpage').create();
var url = 'http://localhost:57165/html/592a89eb-97e9-4eb8-a52e-c7d22101c96c.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\592a89eb-97e9-4eb8-a52e-c7d22101c96c.jpg');

    phantom.exit();
});