var page = require('webpage').create();
var url = 'http://localhost:57165/html/bec3ca98-5484-4fd4-942d-000963a52860.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\bec3ca98-5484-4fd4-942d-000963a52860.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});