let man = document.getElementById('masculine');
let fem =document.getElementById('sassy')
function getElement(){
    if(man.style.display === "none"){
        man.style.display ="block";
    }
    else{
        man.style.display = "none";
    }
}
function getElement2(){
    console.log('working')
    if(fem.style.display === "none"){
        fem.style.display = "block";
    }
    else{
        fem.style.display = "none";
    }
}