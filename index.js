let myLabel = 0;
document.getElementById("decreasebtn");
document.getElementById("resetbtn");
document.getElementById("increasebtn");
document.getElementById("increaseBtn5");

document.getElementById("decreasebtn").onclick = function(){
    document.getElementById("myLabel").Value;
    document.getElementById("myLabel").textContent = `${myLabel--}`;
}

document.getElementById("resetbtn").onclick = function(){
    document.getElementById("myLabel").Value;
    document.getElementById("myLabel").textContent = `${myLabel = 0}`;
}
   
document.getElementById("increasebtn").onclick = function(){
    document.getElementById("myLabel").Value;
    document.getElementById("myLabel").textContent = `${myLabel++}`;
}

document.getElementById("increasebtn5").onclick = function(){
    document.getElementById("myLabel").Value;
    document.getElementById("myLabel").textContent = `${myLabel+=5}`;

}
   

    




