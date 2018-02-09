var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("http://localhost:57165/html/png.html", function start(status) {
    page.render("D:\\canvas\\demo\\app\\app\\images\\png\\png.png", { format: 'png', quality: '100' });
    phantom.exit();
});