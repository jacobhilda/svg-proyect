var page = require('webpage').create();
var url = 'http://localhost:57165/html/403a53ca-dec7-412b-840c-7174b43e38b0.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\403a53ca-dec7-412b-840c-7174b43e38b0.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});