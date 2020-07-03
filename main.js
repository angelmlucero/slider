let diapos = document.getElementsByClassName("diapos");
var index = 0;
var interv;
pasar();
arrancar();

function pasar(){

    for(var i=0; i < diapos.length; i++){
        diapos[i].style.display = "none";
        diapos[i].style.cursor = "pointer";
    };
index++;
    if(index > diapos.length){
        index = 1;
    }
diapos[index -1]. style.display = "block";
};
function arrancar(){
interv = setInterval(pasar, 3000);
}

function stop(){
    clearInterval(interv);
}

 for(var i=0; i < diapos.length; i++){
        diapos[i].addEventListener("mouseover", stop); 
     diapos[i].addEventListener("mouseout", arrancar);
    };