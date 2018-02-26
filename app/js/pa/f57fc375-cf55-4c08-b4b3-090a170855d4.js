var page = require('webpage').create();
var url = 'http://localhost:57165/html/c6950547-a280-48b2-bf3f-9286609a2b05.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\c6950547-a280-48b2-bf3f-9286609a2b05.jpg');

    phantom.exit();
});