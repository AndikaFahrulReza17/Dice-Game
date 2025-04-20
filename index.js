function randomnumber1 (min, max) {
    return Math.floor(Math.random() * 6) + 1;
} 

randomnumber1(1, 6); 


document.querySelector(".img1").setAttribute("src", "images/dice" + randomnumber1(1, 6) + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomnumber1(1, 6) + ".png");

if (document.querySelector(".img1").getAttribute("src") > document.querySelector(".img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (document.querySelector(".img1").getAttribute("src") < document.querySelector(".img2").getAttribute("src")) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!";
}