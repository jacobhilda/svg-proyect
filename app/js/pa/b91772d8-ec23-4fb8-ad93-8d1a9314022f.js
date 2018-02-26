var page = require('webpage').create();
var url = 'http://localhost:57165/html/d9a3298c-26ef-4de1-9a85-6f1c14617967.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\d9a3298c-26ef-4de1-9a85-6f1c14617967.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});