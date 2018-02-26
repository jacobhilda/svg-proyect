var page = require('webpage').create();
var url = 'http://localhost:57165/html/6230a535-e754-4f54-b821-73484fcb00f5.html';
page.viewportSize = { width: 210, height: [h] };
page.open(url, function (status) {
    window.setTimeout(function () {
      page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\6230a535-e754-4f54-b821-73484fcb00f5.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});