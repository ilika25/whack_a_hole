let curr_mole;
let curr_plant;
let gameover= false;
let score=0;

window.onload= function(){
    setgame();
}

function setgame(){
    for(let i=0;i<9;i++){
        let tile=  document.createElement("div");
        tile.id= i.toString();
        tile.addEventListener("click",function(){
            if(this==curr_mole){
                score+=10;
                document.querySelector(".score").innerText= "Score: "+ score;
            }
            if(this==curr_plant){
                document.querySelector(".score").innerHTML= `<p style="color: blue;"> Game Over! </p> Score: `+score;
                gameover=true;
            }
        });
        document.querySelector(".board").appendChild(tile);
    }
    setInterval(setmole,1000);
    setInterval(setplant,2000);
}
function gettile(){
    let n= Math.floor(Math.random()*9);
    return n.toString();
}
function setmole(){
    if(gameover){
        return;
    }
    let newid= gettile();
    if(curr_mole){
        curr_mole.innerHTML="";
    }
    if(curr_plant && curr_plant.id===newid){
        curr_plant.innerHTML="";
    }
    curr_mole= document.getElementById(newid);
    let mole= document.createElement("img");
    mole.src="./mole2.png";
    curr_mole.appendChild(mole);
}
function setplant(){
    if(gameover){
        return;
    }
    let newid= gettile();
    if(curr_plant){
        curr_plant.innerHTML="";
    }
    if(curr_mole && curr_mole.id===newid){
        curr_mole.innerHTML="";
    }
    curr_plant= document.getElementById(newid);
    let plant= document.createElement("img");
    plant.src="./plant2.png";
    curr_plant.appendChild(plant);
}
