var wtext;
var htext;
var ltext;
var bcback;
var myText;
var ygmtx;
var thematrix;
var hsvg;
var wrt;
var pthtml;
var hthtml;
var lthtml;
var wthtml;
var porc_msh;

var hso;
var wso;
var pys;
var pxs;
var hrt;
var arsvg;
var arm;
var wrm;
var aca;
var porc_ars;
var porc_tsv;
var porc_tsh;
var porc_msv;
var porc_thtml;
var topp;

function valsvgOriginal() {
    // alto del svg original
    hso = $("#boxlimit").children("svg")[0].getBoundingClientRect().height;
    console.log("hso ->" + hso);
    // ancho del svg original
    wso = $("#boxlimit").children("svg")[0].getBoundingClientRect().width;
    console.log("wso ->" + wso);

    // ancho del rect en svg
    wrt = $("#rectext")[0].getBoundingClientRect().width;
    // alto del rect en svg
    hrt = $("#rectext")[0].getBoundingClientRect().height;
    // Eje "X" del rect en svg
    pxs = $("#rectext").attr("x");
    // Eje "Y" del texto en svg original
    pys = $("#rectext").attr("y");

    //ANCHO DEL RECT EN EL HTML
    arsvg = 100 / (wso / wrt);

    // ancho del boxlimit
    wrm = $("#boxlimit")[0].getBoundingClientRect().width;
    // alto del boxlimit
    arm = $("#boxlimit")[0].getBoundingClientRect().height;

    // alto en px del svg dentro del área html
    aca = hso / (wso / wrm);

    //CALCULANDO ALTO/ANCHO/LEFT RECT
    porc_ars = 100 / (hso / hrt);
    // CALCULANDO % TOP DE A -> B (texto muestra con respecto al svg en su propia dimensión)
    porc_tsv = 100 / (hso / pys);
    // CALCULANDO % DE EJE X RECT EN SVG
    porc_tsh = 100 / (wso / pxs);
    // CALCULANDO % TOP DE B -> C (svg con respecto al área html en px)
    porc_msv = 100 / (arm / aca);
    // CALCULANDO % TOP DEL TEXTO EN ÁREA HTML
    porc_thtml = porc_msv - porc_tsv;
}

function recalval() {
    wrm = $("#boxlimit").children("svg")[0].getBoundingClientRect().width;
    arm = $("#boxlimit").children("svg")[0].getBoundingClientRect().height;
    aca = hso / (wso / wrm);
}

//G Matrix
function ifgmatrix() {
    var sw = false;
    if ($(".fnt0").parent().attr("transform") !== undefined && $(".fnt0").parent().attr("transform").indexOf("matrix") > -1) {
        sw = true;
    }
    return sw;
}

function gmatrix() {
    if (ifgmatrix()) {
        var matrixelement1 = $(".fnt0").parent().attr("transform");
        var mtxitem = matrixelement1.split(" ");
        var mtxitemyyy = matrixelement1.split(" ");
        var mtxitem5 = mtxitem[5].split(" ").toString().replace(")", "");
        var mtxitem4 = mtxitem[4].split(" ");
        var mtxitem3 = mtxitem[3].split(" ");
        var mtxitem2 = mtxitem[2].split(" ");
        var mtxitem1 = mtxitem[1].split(" ");
        var mtxitem0 = mtxitem[0].split(" ").toString().replace("matrix(", "");
    }
    var thematrix = [mtxitem0, mtxitem1, mtxitem2, mtxitem3, mtxitem4, mtxitem5];
    return thematrix;
}

$('#xalignLeft').click(function () {
    Xremoveflex("btext");
    $(".btext").addClass("justify-content-start");
});

$('#xalignCenter').click(function () {
    Xremoveflex("btext");
    $(".btext").addClass("justify-content-center");
});

$('#xalignRight').click(function () {
    Xremoveflex("btext");
    $(".btext").addClass("justify-content-end");
});

$('#yalignTop').click(function () {
    Yremoveflex("btext");
    $(".btext").addClass("align-items-start");
});

$('#yalignCenter').click(function () {
    Yremoveflex("btext");
    $(".btext").addClass("align-items-center");
});

$('#yalignBottom').click(function () {
    Yremoveflex("btext");
    $(".btext").addClass("align-items-end");
});

// Color y grosor del borde del texto
$("#selectbordertext").change(function () {
    let nmbr = $(this).val();
    let varrr = $("#text1").attr("style") + " -webkit-text-stroke-width:" + nmbr + ";";
    var x = document.getElementById("text1");
    x.setAttribute("style", varrr);
});

function positionMuestra(...param) {
    $("#boxlimit").css("top", param[0] + "%");
    $("#boxlimit").css("left", param[1] + "%");
    $("#boxlimit").css("width", param[2] + "%");
    $("#boxlimit").css("height", param[3] + "%");

    svgadjust(param[4]);
}

function setColorAll(color) {
    let ucolor = "#" + color;
    $("#text1").css("color", ucolor);
}

function efectcolors() {
    // Inicializa efecto colores
    $(".mainbox-color").addClass("d-flex");
    $(".mainbox-color").animate({ width: '100%' });
    $(".mainbox-bordercolor").addClass("d-flex");
    $(".mainbox-bordercolor").animate({ width: '100%' });
}

function setborderColorAll(theborder) {
    let bck = $(theborder).next().css("border");
    let newborder = $("#selectbordertext option:selected").text() + " " + bck.substring(10, bck.length);
    $("#text1").css("-webkit-text-stroke", newborder);
    let varrr = $("#text1").attr("style") + "-webkit-text-stroke:" + newborder + ";";
    var x = document.getElementById("text1");
    x.setAttribute("style", varrr);
}

function positionTexto(pos, top) {
    console.log("entró en position texto");
    //calculando el top del btext en el html
    pthtml = ($("#boxlimit").children("svg")[0].getBoundingClientRect().height * porc_tsv) / 100;
    //calculando height del btext en html
    hthtml = ($("#boxlimit").children("svg")[0].getBoundingClientRect().height * (100 / (hso / hrt))) / 100;
    //calculando el left del btext en el html
    lthtml = ($("#boxlimit").children("svg")[0].getBoundingClientRect().width * porc_tsh) / 100;
    //calculando width del btext en html
    wthtml = ($("#boxlimit").children("svg")[0].getBoundingClientRect().width * (100 / (wso / wrt))) / 100;

    if (pos == "center") {
        console.log("oasis ->" + top);
        $(".btext").css("top", (pthtml + top) + "px");
    } else {
        $(".btext").css("top", pthtml + "px");
    }

    $(".btext").css("left", lthtml + "px");
    $(".btext").css("height", hthtml + "px");
    $(".btext").css("width", wthtml + "px");
}

function svgadjust(pos) {
    console.log(pos);
    $("#boxlimit").children("svg").attr("width", "100%");
    $("#boxlimit").children("svg").attr("height", "100%");

    recalval();
    if (wrm > arm) {
        console.log(`El Height es el ${100 / (wrm / arm)} % del Width `);
        var phwbox = (100 / (wrm / arm));
        if (hso > wso) {
            console.log("EL HEIGHT LLEGA PRIMERO");
            $("#boxlimit").children("svg").attr("width", parseFloat((arm * (100 / (hso / wso)) / 100) + "px"));
            positionTexto();
        } else if (hso < wso) {
            var phwsvg = (100 / (wso / hso));
            if (phwsvg > phwbox) {
                console.log("HEIGHT LLEGA PRIMERO");
                $("#boxlimit").children("svg").attr("width", parseFloat((arm * (100 / (hso / wso)) / 100) + "px"));
                positionTexto();
            } else if ((phwsvg < phwbox)) {
                console.log("WIDTH LLEGA PRIMERO");
                $("#boxlimit").children("svg").attr("height", parseFloat((wrm * (100 / (wso / hso)) / 100) + "px"));
                positionTexto();
            } else {
                console.log("CUADRADO PERFECTO");
            }
        }
    } else if (wrm < arm) {
        console.log(`El Width es el ${100 / (arm / wrm)} % del Height`);
        var pwhbox = (100 / (arm / wrm));
        if (hso < wso) {
            console.log("EL WIDTH LLEGA PRIMERO");
            $("#boxlimit").children("svg").attr("height", parseFloat((wrm * (100 / (wso / hso)) / 100) + "px"));
            if (pos == "center") {
                let top = (arm - $("#boxlimit").children("svg")[0].getBoundingClientRect().height) / 2;
                $("#boxlimit").css("padding-top", top + "px");
                topp = top;
            }
            positionTexto(pos, topp);
        } else if (hso > wso) {
            var pwhsvg = (100 / (wso / hso));
            if (pwhsvg > pwhbox) {
                console.log("WIDTH LLEGA PRIMERO");
                $("#boxlimit").children("svg").attr("height", parseFloat((wrm * (100 / (wso / hso)) / 100) + "px"));
                positionTexto();
            } else if (pwhsvg < pwhbox) {
                console.log("HEIGHT LLEGA PRIMERO");
                $("#boxlimit").children("svg").attr("width", parseFloat((arm * (100 / (hso / wso)) / 100) + "px"));
                positionTexto();
            } else {
                console.log("CUADRADO PERFECTO");
            }
        }
    } else {
        console.log(`100%`);
    }

    redtext();
    positionTexto(pos);
}

$(document).ready(function () {
    efectcolors();

    // Valores originales del SVG
    valsvgOriginal();
    svgadjust();

    $("#selectproduct").change(function () {
        let sxsx = $(this).val();
        $("#imgbase").addClass("bounceOutLeft animated");
        console.log("feel -> " + sxsx);
        var coors = $(this).children('option:selected').attr("coor").toString().split(",");

        setTimeout(() => {
            $("#imgbase").removeClass("bounceOutLeft animated");
            $("#imgbase").addClass("bounceInRight animated");
            positionMuestra(coors[0], coors[1], coors[2], coors[3], coors[4]);

            var text1 = $("#text1").text();
            redtext(text1);
        }, 500);
        $("html").css("overflow-x", "hidden");
    });

    $("#selectfont").change(function () {
        let font = $(this).val();
        $("#text1").css("font-family", font);
        myText = document.getElementById("exampleTextarea");
        wtextx = $("#text1")[0].getBoundingClientRect().width;
        addtext(myText);
    });

    //strech
    $('#xstretch').click(function () {
        /*let varia = 1 + (1 - ($("#text1")[0].getBoundingClientRect().width / $(".btext")[0].getBoundingClientRect().width));*/
        let xcale = $("#rectext")[0].getBoundingClientRect().width / $("#text1")[0].getBoundingClientRect().width;
        $("#text1").css("transform", "scale( " + xcale + " ,1)");
        $("#xalignLeft").attr("disabled");
    });

    $('#ystretch').click(function () {
        $(".btext").removeClass("d-flex");
        let ycale = $(".btext")[0].getBoundingClientRect().height / $("#text1")[0].getBoundingClientRect().height;
        $("#text1").css("transform", "scale( 1, " + ycale + ")");
        $(".btext").addClass("d-flex");
        $(".btext").addClass("align-items-center");
    });

    //aligns
    function Xremoveflex(id) {
        $("." + id).removeClass("justify-content-start");
        $("." + id).removeClass("justify-content-center");
        $("." + id).removeClass("justify-content-end");
    }

    function Yremoveflex(id) {
        $("." + id).removeClass("align-items-start");
        $("." + id).removeClass("align-items-center");
        $("." + id).removeClass("align-items-end");
    }
});

//Redimensionar texto
function redtext(txt) {
    var wsvg = $("svg")[0].getBoundingClientRect().width;
    hsvg = $("svg")[0].getBoundingClientRect().height;

    $('text').each(function () {
        if (($(this).text().toUpperCase().replace("\n", " ").trim() == "MUESTRA") || ($(this).text().toUpperCase().replace("\n", " ").trim() == "YOUR TEXT")) {
            let Twoclass = $(this).attr("class").split(" ")[1];
            recalval();

            wtext = $(this)[0].getBoundingClientRect().width;
            htext = $(this)[0].getBoundingClientRect().height;

            // Calculando porcentaje de alto del svg dentro del área html
            var porc_msv_px = (arm * porc_msv) / 100;
            // Calculando porcentaje de texto html área html
            var porc_tsv_px = (porc_msv_px * porc_tsv) / 100;
            var asxsx = 100 / (arm / porc_tsv_px);
            var fstext = window.getComputedStyle(document.querySelector("." + Twoclass)).fontSize;
            var fftext = window.getComputedStyle(document.querySelector("." + Twoclass)).fontFamily;

            var hbtext = (hsvg * porc_ars) / 100;

            $(".boxlimit").append("<div class='btext d-flex justify-content-center align-items-center' style='top: " + asxsx + "%; width: 100%; height: " + hbtext + "px;' > <span style='font-family: " + fftext + "; font-size: " + fstext + "; white-space: nowrap; line-height: 1.1; position: absolute;' id='text1'>YOUR TEXT</span></div>");
            $(this).remove();
        }
    });
    redimenText(wrt);
}

function addtext(txt) {
    var myText = document.getElementById("exampleTextarea").value;
    $("#text1").html(myText);
    redimenText(wtext, myText, ltext);
}

function redimenText(wtextn, myText) {
    let spanwidth = $("#text1")[0].getBoundingClientRect().width;
    let spanheight = $("#text1")[0].getBoundingClientRect().height;
    let fontsize = $("#text1").css('font-size');
    let ctnew = $("#text1").text().length;
    let nnnn = $("#text1")[0].getBoundingClientRect().height;
    let hrah = (hsvg * porc_ars) / 100;
    let hraasdh = (spanheight * porc_ars) / 100;

    var arect = $("#rectext")[0].getBoundingClientRect().width
    var alrect = $("#rectext")[0].getBoundingClientRect().height
    var elmntext = document.getElementById("text1");
    var wwtxt = elmntext.clientWidth;

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
}