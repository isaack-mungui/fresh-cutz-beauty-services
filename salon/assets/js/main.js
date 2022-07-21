// $(".content .radio_contentradio_4").hide();
// $(".content .radio_content:first-child").show();

// $(".radio_wrap").click(function(){
//     var current_raido = $(this).attr("data-radio");
//     $(".content .radio_content").hide();
//     $("."+current_raido).show();
//   })
var face = document.getElementById("radio_content_radio_1");

function getElement(){
    if(face.style.display === "none"){
        face.style.display = "block"
    }
    else{
        face.style.display = "none"
    }
}

var nail = document.getElementById("radio_content_radio_2");
function getElement2(){
    if(nail.style.display === "none"){
        nail.style.display = "block"
    }
    else{
        nail.style.display = "none"
    }
}

var locks = document.getElementById("radio_content_radio_3");
function getElement3(){
    if(locks.style.display === "none"){
        locks.style.display = "block"
    }
    else{
        locks.style.display = "none"
    }
}

var braid = document.getElementById("radio_content_radio_4");
function getElement4(){
    if(braid.style.display === "none"){
        braid.style.display = "block"
    }
    else{
        braid.style.display = "none"
    }
}