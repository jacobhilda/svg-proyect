var page = require('webpage').create();
var url = 'http://localhost:57165/html/caeed50f-b665-47e2-8be9-ffc0d45203db.html';
page.viewportSize = { width: 210, height: 230 };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\caeed50f-b665-47e2-8be9-ffc0d45203db.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});