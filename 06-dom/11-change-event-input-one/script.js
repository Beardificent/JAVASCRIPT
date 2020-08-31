/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    function countChars(obj){
        let maxLength = 10;
        let strLength = obj.value.length;
        if(strLength > maxLength){
            document.getElementById("counter").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
        }else{
            document.getElementById("counter").innerHTML = strLength+' out of '+maxLength+' characters';
        }


   /* function checkInput(){
        input = document.getElementById("pass-one");
    }*/

}