var page = require('webpage').create();
var url = 'http://localhost:57165/html/b2329ec9-e42b-4fc2-8df9-77fc00634258.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\b2329ec9-e42b-4fc2-8df9-77fc00634258.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});