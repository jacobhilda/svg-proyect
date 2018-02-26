var page = require('webpage').create();
var url = 'http://localhost:57165/html/a644993c-aac0-4391-8a9a-621db9d3abf2.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\a644993c-aac0-4391-8a9a-621db9d3abf2.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});