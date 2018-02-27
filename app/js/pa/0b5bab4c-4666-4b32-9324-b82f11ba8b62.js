var page = require('webpage').create();
var url = 'http://localhost:57165/html/TZ0-8586819141343582960W000.html';
page.viewportSize = { width: 228.421875, height: 247.671875 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\TZ0-8586819141343582960W000.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});