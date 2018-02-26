var page = require('webpage').create();
var url = 'http://localhost:57165/html/345adbdd-4d37-489c-9c93-94526d6e3dd5.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\345adbdd-4d37-489c-9c93-94526d6e3dd5.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});