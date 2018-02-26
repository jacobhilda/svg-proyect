var page = require('webpage').create();
var url = 'http://localhost:57165/html/c6fcd78c-ca52-402f-8f71-1ca33c5b1711.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\c6fcd78c-ca52-402f-8f71-1ca33c5b1711.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});