var page = require('webpage').create();
var url = 'http://localhost:57165/html/13bfa7c9-758d-4126-8e66-af9df596b222.html';
page.viewportSize = { width: 783, height: 1000 };
page.open(url, function (status) {
   
            page.render('D:\\canvas\\demo\\app\\app\\images\\png\\13bfa7c9-758d-4126-8e66-af9df596b222.jpg');

    
    phantom.exit();
});