var wtext;
var htext;





$(document).ready(function(){
/*
  $("#boxlimit").css("width","100%");
  $("#boxlimit").css("height","100%");*/
  $("svg").attr("width","100%");
  $("svg").attr("height","100%");


  redtext();



  $('#xalignLeft').click(function(){
    Xremoveflex("btext");
      $(".btext").addClass("justify-content-start");
  });

  $('#xalignCenter').click(function(){
    Xremoveflex("btext");
      $(".btext").addClass("justify-content-center");
  });

  $('#xalignRight').click(function(){
    Xremoveflex("btext");
      $(".btext").addClass("justify-content-end");
  });

  $('#yalignTop').click(function(){
    Yremoveflex("btext");
      $(".btext").addClass("align-items-start");
  });

  $('#yalignCenter').click(function(){
    Yremoveflex("btext");
      $(".btext").addClass("align-items-center");
  });

  $('#yalignBottom').click(function(){
    Yremoveflex("btext");
      $(".btext").addClass("align-items-end");
  });



  function Xremoveflex(id){
    $("."+id).removeClass("justify-content-start");
    $("."+id).removeClass("justify-content-center");
    $("."+id).removeClass("justify-content-end");
  }

  function Yremoveflex(id){
    $("."+id).removeClass("align-items-start");
    $("."+id).removeClass("align-items-center");
    $("."+id).removeClass("align-items-end");
  }

});



//Redimensionar texto
function redtext(txt){
  console.log(txt);

  var wsvg = $("svg")[0].getBoundingClientRect().width;
  var hsvg = $("svg")[0].getBoundingClientRect().height;



  $('text').each(function(){
      if ($(this).text() == "MUESTRA") {
        Twoclass  =  $(this).attr("class").split(" ")[1];

         wtext = $(this)[0].getBoundingClientRect().width;
         htext = $(this)[0].getBoundingClientRect().height;
         ltext = $(this).length;

         var anchooriginal = $(this)[0].getBoundingClientRect().width;
         // posición del texto eje y en porcentaje con respecto al boxlimit
         let toppor = (hsvg - htext) / (hsvg / 100);
         //alto proporcional del campo de texto editable
         let hoppor = 100 - toppor;


        var fstext = window.getComputedStyle(document.querySelector("."+Twoclass)).fontSize;
        var fftext = window.getComputedStyle(document.querySelector("."+Twoclass)).fontFamily;

        $(".boxlimit").append("<div style='top: "+ toppor +"%; width: 100%; height: "+ hoppor +"%; border: 1px solid red;' class='d-flex btext'> <span style='font-family: "+ fftext +"; font-size: "+ fstext +"; white-space: nowrap; line-height: 1.1;' id='text1'> ADD YOUR TEXT </span></div>");

        $(this).remove();
      }
  });

  redimenText(wtext);

}

function addtext(txt){

  var myText = document.getElementById("exampleTextarea").value;

  $("#text1").html(myText);

  redimenText(wtext,htext,myText);
}


function redimenText(wtextn,htext,myText){

  let spanwidth = $("#text1")[0].getBoundingClientRect().width;
  console.log("ancho actual -> supongo no -> "+spanwidth);
  let spanheight = $("#text1")[0].getBoundingClientRect().width;
  let fontsize = $("#text1").css('font-size');

  console.log("Ancho original->"+ spanwidth + " <<->> Ancho actual ->"+ wtextn);
  console.log("Alto original->"+ htext + " <<->> Alto actual ->"+ spanheight);


    while ((spanwidth < wtextn) && (myText != "")){
        fontsize = parseFloat(fontsize.toString().replace("px","")) +1;
        $("#text1").css("font-size",fontsize);
        spanwidth = $("#text1")[0].getBoundingClientRect().width;
        console.log("texto más pequeño");
  }

    while ( (spanwidth >= wtextn) && (myText != "") ){
    console.log("texto más grande");
    fontsize = parseFloat(fontsize.toString().replace("px","")) -1;
    $("#text1").css("font-size",fontsize);
    spanwidth = $("#text1")[0].getBoundingClientRect().width;

  }

}
