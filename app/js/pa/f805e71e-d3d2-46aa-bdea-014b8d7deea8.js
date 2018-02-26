var page = require('webpage').create();
var url = 'http://localhost:57165/html/7e9e2045-9392-4557-ab9e-ecc1891c617c.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\7e9e2045-9392-4557-ab9e-ecc1891c617c.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});