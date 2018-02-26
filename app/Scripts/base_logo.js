$(document).ready(function () {
    var w = parseFloat($("#boxlimit").attr("w"));
    var h = parseFloat($("#boxlimit").attr("h"));
    //$("#boxlimit").removeAttr("width");
    //$("#boxlimit").removeAttr("height

    $("#boxlimit").css("width", `${w}px`);
    $("#boxlimit").css("height", `${h}px`);

    $("#boxlimit").children(".btext").children("span").css("left", "50%");
    $("#boxlimit").children(".btext").children("span").css("top", "50%");
    //$("#boxlimit").children(".btext").children("span").css("transform", "translate(-50%, -50%)");
    element = document.getElementById("text1");
    element.style.webkitTransform = "translate(-50%, -50%)";
    //$(".btext").children("span").css('transform', "translate(-50%, -50%)");

    //$("#boxlimit").children(".btext").children("span").css("transform", "translate(-50 %, -50 %)");
    //$("#boxlimit").children(".btext").children("span").css("-webkit-transform", "translate(-50 %, -50 %)");



    var dccv = 100 / (w / h);
    var porc_a = parseFloat($("#boxlimit").css("height")) + ((parseFloat($("#boxlimit").css("height")) / 100) * 8.70);

    var hsvg = $("svg")[0].getBoundingClientRect().height;
    var myText = $("#text1").text();

    var wrt = $(".btext")[0].getBoundingClientRect().width;
    var hrt = $(".btext")[0].getBoundingClientRect().height;
    redimenText(wrt, myText);

    //function redimenText(wrt, myText) {
    //    let spanwidth = $("#text1")[0].getBoundingClientRect().width;
    //    let spanheight = $("#text1")[0].getBoundingClientRect().height;
    //    let fontsize = $("#text1").css('font-size');
    //    let ctnew = $("#text1").text().length;

    //    console.log("spanwidth ->" + spanwidth + "spanheight ->" + spanheight + "fontsize ->" + fontsize + "ctnew ->" + ctnew);

    //    while ((spanwidth < wrt) && (myText != "")) {
    //        fontsize = parseFloat(fontsize.toString().replace("px", "")) + 1;
    //        $("#text1").css("font-size", fontsize);
    //        spanwidth = $("#text1")[0].getBoundingClientRect().width;
    //    }

    //    while ((spanwidth > wrt) && (myText != "")) {
    //        fontsize = parseFloat(fontsize.toString().replace("px", "")) - 1;
    //        $("#text1").css("font-size", fontsize);
    //        spanwidth = $("#text1")[0].getBoundingClientRect().width;
    //    }

    //    while (spanheight > hrt) {
    //        fontsize = parseFloat(fontsize.toString().replace("px", "")) - 1;
    //        $("#text1").css("font-size", fontsize);
    //        spanheight = $("#text1")[0].getBoundingClientRect().height;
    //    }

    //    centrar();
    //}

    function redimenText(wtextn, myText) {
        let spanwidth = $("#text1")[0].getBoundingClientRect().width;
        let spanheight = $("#text1")[0].getBoundingClientRect().height;
        let fontsize = $("#text1").css('font-size');

        var arect = $(".betxt")[0].getBoundingClientRect().width
        var alrect = $(".betxt")[0].getBoundingClientRect().height

    while ((spanwidth < arect) && (spanheight < alrect) && (myText != "")) {
        fontsize = parseFloat(fontsize.toString().replace("px", "")) + 1;
        $("#text1").css("font-size", fontsize);
        spanwidth = $("#text1")[0].getBoundingClientRect().width;
        spanheight = $("#text1")[0].getBoundingClientRect().height;
    }

    while (((spanwidth > arect) || (spanheight > alrect)) && (myText != "")) {
        fontsize = parseFloat(fontsize.toString().replace("px", "")) - 1;
        $("#text1").css("font-size", fontsize);
        spanwidth = $("#text1")[0].getBoundingClientRect().width;
        spanheight = $("#text1")[0].getBoundingClientRect().height;
        }

        centrar();
}




    function centrar() {
        $(".btext").css("width", wrt + "px");
        $(".btext").css("height", hrt + "px");
        $(".btext").css("left", "0px");
        $(".btext").css("right", "0px");
        $(".btext").css("margin", "0 auto");
        $(".btext").css("display", "flex");
        $(".btext").css("align-items", "center");

        $("#text1").css("width", "100%");
        $("#text1").css("text-align", "center");
    }
});
