var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("[URL]", function start(status) {
    page.render("[NAME]", { format: 'png', quality: '100' });
    phantom.exit();
});