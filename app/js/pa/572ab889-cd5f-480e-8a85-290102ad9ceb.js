var page = require('webpage').create();
var url = 'http://localhost:57165/html/5f40b86c-e6c6-49c9-a74e-3d446ecee49e.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\5f40b86c-e6c6-49c9-a74e-3d446ecee49e.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});