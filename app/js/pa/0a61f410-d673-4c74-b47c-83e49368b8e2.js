var page = require('webpage').create();
var url = 'http://localhost:57165/html/7587b96b-0835-4355-8c51-0c637b15eeb8.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\7587b96b-0835-4355-8c51-0c637b15eeb8.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});