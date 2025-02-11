
const posclickizqX= document.getElementById("posclickizqX");
const posclickizqY= document.getElementById("posclickizqY");
const posX= document.getElementById("posX");
const posY= document.getElementById("posY");

const mostrarMovimiento =()=>{
    const posicionX = event.clientX;
    
    posX.textContent= posicionX;
    
    const posicionY = event.clientY;
    posY.textContent= posicionY;
   
}

const mostrarClick=(event)=>{
if (event.button == 2){
    const posclickX = event.clientX;
    
    posclickderX.textContent= posclickX;
    
    const posclickY = event.clientY;
    posclickderY.textContent= posclickY;
}else{
    const posclickX = event.clientX;
    //console.log(posclickX)
    posclickizqX.textContent= posclickX;
    
    const posclickY = event.clientY;
    posclickizqY.textContent= posclickY;
}
}
document.addEventListener("mousemove",mostrarMovimiento);
document.addEventListener("mousedown",mostrarClick);
