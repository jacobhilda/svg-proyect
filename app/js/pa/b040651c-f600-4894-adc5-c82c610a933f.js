var page = require('webpage').create();
var url = 'http://localhost:57165/html/18a816dd-34c1-4f78-83bf-08d547d5258d.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\18a816dd-34c1-4f78-83bf-08d547d5258d.jpg');

    phantom.exit();
});