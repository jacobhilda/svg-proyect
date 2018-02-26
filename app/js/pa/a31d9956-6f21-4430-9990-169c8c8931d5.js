var page = require('webpage').create();
var url = 'http://localhost:57165/html/a3962199-aaab-470a-921e-6943eab1910b.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\a3962199-aaab-470a-921e-6943eab1910b.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});