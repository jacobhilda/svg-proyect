var page = require('webpage').create();
var url = 'http://localhost:57165/html/4e4bda77-7786-4ae1-9c98-4bb6e419ab8f.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\4e4bda77-7786-4ae1-9c98-4bb6e419ab8f.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});