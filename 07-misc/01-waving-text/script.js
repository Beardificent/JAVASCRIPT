/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let text = document.getElementById("target").innerText;
    let chars = Array.from(text);
    let wave = "";
    let fsize = [1, 2, 3, 4, 5, 4, 3, 2, 1,]
        for (let i = 0; i < chars.length; i++){
            wave += "<span>" + chars[i] + "</span>";
        }
    document.getElementById("target").innerHTML = wave;
        let characters = document.getElementsByTagName("span");
        for (let x = 0; x < characters.length; x++){
            let y = x+1;
            characters[y].style.fontSize = fsize[x % fsize.length] + "1px";
        }
    })();




// WERKT MAAR IS NIET CORRECT
/*
    let s = "s";
    let e = "e";
    let a = "a";
    let i = "i";
    let c = "c";
    let k = "k";
    let n = "n";

    let result = s.fontsize(1) + e.fontsize(2) + a.fontsize(3) + s.fontsize(4) + i.fontsize(5) + c.fontsize(4) + k.fontsize(3) + n.fontsize(2) + e.fontsize(1) + s.fontsize(2) + s.fontsize(3)

    target.innerHTML = result;


})();



 */

// VERGROOT DE TEKST - VERKEERD
/*
let text = document.getElementById('target');

function increaseTextSize(size) {
    text.style.fontSize = size + 'px';
    if (size <= 30) setTimeout(increaseTextSize, 50, size + 1);
}
increaseTextSize(10);

 */