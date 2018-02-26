var page = require('webpage').create();
var url = 'http://localhost:57165/html/3679382b-b5f2-4446-9de0-a8e2d40f6977.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\3679382b-b5f2-4446-9de0-a8e2d40f6977.jpg');

    phantom.exit();
});