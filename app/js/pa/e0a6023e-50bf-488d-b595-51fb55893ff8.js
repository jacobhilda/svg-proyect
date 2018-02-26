var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-858681985685477580800M.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\TC1SG0000-858681985685477580800M.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});