var page = require('webpage').create();
var url = 'http://localhost:57165/html/d2d462c1-712c-4faa-9851-7410e7a80c5e.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\d2d462c1-712c-4faa-9851-7410e7a80c5e.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});