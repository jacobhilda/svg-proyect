var page = require('webpage').create();
var url = 'http://localhost:57165/html/8c61584f-8753-4502-9b5e-307761c83474.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\8c61584f-8753-4502-9b5e-307761c83474.jpg');

    phantom.exit();
});