var page = require('webpage').create();
var url = 'http://localhost:57165/html/d07bcda1-09ee-49ab-b939-9e2e33278596.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\d07bcda1-09ee-49ab-b939-9e2e33278596.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});