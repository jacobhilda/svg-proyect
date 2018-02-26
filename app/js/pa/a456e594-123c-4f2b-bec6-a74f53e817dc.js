var page = require('webpage').create();
var url = 'http://localhost:57165/html/50ad40a7-74a7-411b-9e00-2eb7c1a0b1c5.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\50ad40a7-74a7-411b-9e00-2eb7c1a0b1c5.jpg');

    phantom.exit();
});