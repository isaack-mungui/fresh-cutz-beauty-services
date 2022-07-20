// $(".content .radio_contentradio_4").hide();
// $(".content .radio_content:first-child").show();

// $(".radio_wrap").click(function(){
//     var current_raido = $(this).attr("data-radio");
//     $(".content .radio_content").hide();
//     $("."+current_raido).show();
//   })
var face = document.getElementById('main-content1');

function getElement(){
    if(face.style.display === "none"){
        face.style.display = "flex"
    }
    else{
        face.style.display = "none"
    }
}