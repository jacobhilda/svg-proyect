var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-8586819250720546519W00L.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\TC1SG0000-8586819250720546519W00L.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});