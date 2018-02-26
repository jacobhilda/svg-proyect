var page = require('webpage').create();
var url = 'http://localhost:57165/html/88845112-7c5e-4f74-b1ff-2c67bf08ce97.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\88845112-7c5e-4f74-b1ff-2c67bf08ce97.jpg');

    phantom.exit();
});