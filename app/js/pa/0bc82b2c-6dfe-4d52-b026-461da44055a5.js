var page = require('webpage').create();
var url = 'http://localhost:57165/html/da864184-f38b-40c5-83f4-5c37dc8d3677.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\da864184-f38b-40c5-83f4-5c37dc8d3677.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});