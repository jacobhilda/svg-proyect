$(document).ready(function () {
    var w = parseFloat($("#boxlimit").attr("w"));
    var h = parseFloat($("#boxlimit").attr("h"));
    $("#boxlimit").removeAttr("width");
    $("#boxlimit").removeAttr("height");
    var dccv = 100 / (w / h);
    var porc_a = parseFloat($("#boxlimit").css("height")) + ((parseFloat($("#boxlimit").css("height")) / 100) * 8.70);

    var hsvg = $("svg")[0].getBoundingClientRect().height;
    var myText = $("#text1").text();

    var wrt = $("#rectext")[0].getBoundingClientRect().width;
    var hrt = $("#rectext")[0].getBoundingClientRect().height;
    redimenText(wrt, myText);

    function redimenText(wrt, myText) {
        let spanwidth = $("#text1")[0].getBoundingClientRect().width;
        let spanheight = $("#text1")[0].getBoundingClientRect().height;
        let fontsize = $("#text1").css('font-size');
        let ctnew = $("#text1").text().length;

        console.log("spanwidth ->" + spanwidth + "spanheight ->" + spanheight + "fontsize ->" + fontsize + "ctnew ->" + ctnew);

        while ((spanwidth < wrt) && (myText != "")) {
            fontsize = parseFloat(fontsize.toString().replace("px", "")) + 1;
            $("#text1").css("font-size", fontsize);
            spanwidth = $("#text1")[0].getBoundingClientRect().width;
        }

        while ((spanwidth > wrt) && (myText != "")) {
            fontsize = parseFloat(fontsize.toString().replace("px", "")) - 1;
            $("#text1").css("font-size", fontsize);
            spanwidth = $("#text1")[0].getBoundingClientRect().width;
        }

        while (spanheight > hrt) {
            fontsize = parseFloat(fontsize.toString().replace("px", "")) - 1;
            $("#text1").css("font-size", fontsize);
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

        $("#text1").css("width", "100%");
        $("#text1").css("text-align", "center");
    }
});