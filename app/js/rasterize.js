var page = require('webpage').create();
var url = '[URL]';
page.viewportSize = { width: [w], height: [h] };
page.open(url, function (status) {
    window.setTimeout(function () {
        page.render('[NAME]', { format: 'png', quality: '50' });
        phantom.exit();
    }, 200);
});