var page = require('webpage').create();
var url = 'http://localhost:57165/html/c42a63c7-bb4b-4d50-85ea-382eb16f16d5.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\c42a63c7-bb4b-4d50-85ea-382eb16f16d5.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});