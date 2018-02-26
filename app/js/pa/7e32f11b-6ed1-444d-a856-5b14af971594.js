var page = require('webpage').create();
var url = 'http://localhost:57165/html/779903dc-bd5e-48bc-ae12-717ad9926c62.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\779903dc-bd5e-48bc-ae12-717ad9926c62.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});