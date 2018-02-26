var page = require('webpage').create();
var url = 'http://localhost:57165/html/a3883670-7ea8-44e6-ae1f-5a32f01f2ac8.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\a3883670-7ea8-44e6-ae1f-5a32f01f2ac8.jpg');

    phantom.exit();
});