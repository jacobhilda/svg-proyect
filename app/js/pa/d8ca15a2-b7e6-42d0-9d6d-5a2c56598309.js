var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-858681928019083394200L.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\TC1SG0000-858681928019083394200L.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});