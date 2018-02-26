var page = require('webpage').create();
var url = 'http://localhost:57165/html/46677d09-9d8c-4cb3-b71a-a44a4da7b84f.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\46677d09-9d8c-4cb3-b71a-a44a4da7b84f.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});