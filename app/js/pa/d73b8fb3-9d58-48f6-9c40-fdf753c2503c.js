var page = require('webpage').create();
var url = 'http://localhost:57165/html/7d00e842-dfa1-4673-b258-2a9083d65ea8.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\7d00e842-dfa1-4673-b258-2a9083d65ea8.jpg');

    phantom.exit();
});