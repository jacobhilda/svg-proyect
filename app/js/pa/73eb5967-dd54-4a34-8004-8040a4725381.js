var page = require('webpage').create();
var url = 'http://localhost:57165/html/07b25941-7f8b-4e1a-b7a6-6f61ecc4dc5a.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
      page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\07b25941-7f8b-4e1a-b7a6-6f61ecc4dc5a.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});