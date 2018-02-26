var page = require('webpage').create();
var url = 'http://localhost:57165/html/ce395bb8-6143-4a26-98c0-53367d51f103.html';
page.viewportSize = { width: 210, height: [h] };
page.open(url, function (status) {
    window.setTimeout(function () {
      page.render('D:\\canvas\\demo\\app\\app\\images\\logo\\ce395bb8-6143-4a26-98c0-53367d51f103.png', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});