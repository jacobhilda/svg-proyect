var page = require('webpage').create();
var url = 'http://localhost:57165/html/8cdf95e3-782d-43ae-836a-32a65db68140.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\8cdf95e3-782d-43ae-836a-32a65db68140.jpg');

    phantom.exit();
});