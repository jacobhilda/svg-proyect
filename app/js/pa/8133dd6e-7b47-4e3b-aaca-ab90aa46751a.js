var page = require('webpage').create();
var url = 'http://localhost:57165/html/82871d43-beb9-402d-a84b-6086889f26f6.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\82871d43-beb9-402d-a84b-6086889f26f6.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});