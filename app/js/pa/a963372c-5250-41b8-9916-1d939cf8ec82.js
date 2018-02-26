var page = require('webpage').create();
var url = 'http://localhost:57165/html/31b8c756-9e3c-430d-9d89-e6edd7f01084.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
      page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\31b8c756-9e3c-430d-9d89-e6edd7f01084.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});