var page = require('webpage').create();
var url = 'http://localhost:57165/html/c9023528-bed0-47e9-8958-0f05b0a9f4ac.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\c9023528-bed0-47e9-8958-0f05b0a9f4ac.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});