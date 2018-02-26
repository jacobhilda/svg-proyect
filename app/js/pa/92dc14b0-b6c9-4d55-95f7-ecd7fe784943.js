var page = require('webpage').create();
var url = 'http://localhost:57165/html/c92ac7ea-dcab-403a-9853-4bf9ddcf618b.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\c92ac7ea-dcab-403a-9853-4bf9ddcf618b.jpg');

    phantom.exit();
});