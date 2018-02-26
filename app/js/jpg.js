var page = require('webpage').create();
var url = '[URL]';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('[NAME]');

    phantom.exit();
});