var page = require('webpage').create();
var url = 'http://localhost:57165/html/TT1-8586819152351528245W00L.html';
page.viewportSize = { width: 185.328125, height: 236.15625 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\TT1-8586819152351528245W00L.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});