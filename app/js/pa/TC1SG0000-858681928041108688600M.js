var page = require('webpage').create();
var url = 'http://localhost:57165/html/TC1SG0000-858681928041108688600M-2.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
    page.render('D:\\canvas\\demo\\app\\app\\images\\png\\TC1SG0000-858681928041108688600M.jpg');

    phantom.exit();
});