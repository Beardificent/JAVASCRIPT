let one;
let two;

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

function checkinput(){
    one = parseInt(document.getElementById("op-one").value);
    two = parseInt(document.getElementById("op-two").value);
}