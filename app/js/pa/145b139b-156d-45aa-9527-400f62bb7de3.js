var page = require('webpage').create();
var url = 'http://localhost:57165/html/5e57b8af-f02b-4613-8482-660b2e7e579f.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\5e57b8af-f02b-4613-8482-660b2e7e579f.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});