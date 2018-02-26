var page = require('webpage').create();
var url = 'http://localhost:57165/html/1b2582a3-ac73-4251-85c6-a2611955290a.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
   
            page.render('D:\\canvas\\demo\\app\\app\\images\\png\\1b2582a3-ac73-4251-85c6-a2611955290a.jpg');

    
    phantom.exit();
});