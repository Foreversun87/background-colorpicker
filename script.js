let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let x1 = 0;
let x2 = 0;
let x3 = 0;

color1.value = randomColor(); 
color2.value = randomColor();
colorPick();

function randomColor(){
    x1 = Math.round(Math.random() * 255);
    x2 = Math.round(Math.random() * 255);
    x3 = Math.round(Math.random() * 255);
        
    let farbe = "#"+x1.toString(16)+x2.toString(16)+x3.toString(16);
    
    if(farbe.length > 7){
        farbe = farbe.substring(0,farbe.length-1);
        console.log("String zu groß: " +farbe);
    }   

    while (farbe.length < 7){
        farbe = farbe + Math.round(Math.random() * 9);
        console.log("String zu klein: " +farbe);
    }
    return farbe;
}

function colorPick(){
    
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorPick);

color2.addEventListener("input", colorPick);