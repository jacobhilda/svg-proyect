var page = require('webpage').create();
var url = 'http://localhost:57165/html/de13f343-88ec-4a96-bfad-8d7eccd51022.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\de13f343-88ec-4a96-bfad-8d7eccd51022.jpg');

    phantom.exit();
});