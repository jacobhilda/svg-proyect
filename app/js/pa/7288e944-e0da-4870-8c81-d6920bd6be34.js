var page = require('webpage').create();
var url = 'http://localhost:57165/html/728b1367-db6c-4147-94b5-0cf99961b332.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\728b1367-db6c-4147-94b5-0cf99961b332.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});