//first create variables to use
//link variables to text input html
//link buttons to functions and give calculations to make
let one;
let two;

function checkinput(){
    one = parseInt(document.getElementById("op-one").value);
    two = parseInt(document.getElementById("op-two").value);
}

(function() {

    document.getElementById("addition").addEventListener("click", function() {
        checkinput();
        alert(one + two);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        checkinput();
        alert(one - two);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        checkinput();
        alert(one * two);
    });

    document.getElementById("division").addEventListener("click", function() {
        alert(one / two);
    });
})();

