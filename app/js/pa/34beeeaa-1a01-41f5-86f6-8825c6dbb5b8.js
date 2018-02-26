var page = require('webpage').create();
var url = 'http://localhost:57165/html/f619c15f-f0f4-4d22-9867-cbd8e8c9acba.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\f619c15f-f0f4-4d22-9867-cbd8e8c9acba.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});