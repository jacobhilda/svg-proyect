var page = require('webpage').create();
var url = 'http://localhost:57165/html/93bb4204-accb-44bd-bf8f-256ca7174a45.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\93bb4204-accb-44bd-bf8f-256ca7174a45.jpg');

    phantom.exit();
});