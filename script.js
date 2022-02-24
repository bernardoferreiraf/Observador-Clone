let root = document.documentElement;

let body = document.getElementById("body");

let a = document.getElementsByTagName("a")

function darkMode() {
    body.style.setProperty('background-color', '#000000');
    body.style.setProperty('color', '#ffffff');
    a.style.setProperty('color', '#ffffff');
}

//  --clr-primary: #FFFFFF;
//     --clr-secundary: #57A0D7;
//     --clr-third: #000000;
//     --bgclr-secundary: #153044;