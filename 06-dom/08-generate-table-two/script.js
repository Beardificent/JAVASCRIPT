/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */


//REDO THIS WEEKEND
//REDO THIS WEEKEND
//REDO THIS WEEKEND -- STACKOVERFLOW COPY PASTA

//HENDRIKS SOLUTION
/*(function() {
    var multTable = {};
    let scrum = ""
    for (var v = 1; v < 11; v++) {
        multTable[v] = {};
        scrum = scrum + "<tr>";
        for (var i = 1; i < 11; i++) {
            multTable[v][i] = i * v;
            scrum = scrum + "<td>" + multTable[v][i] + "</td>";
        }scrum = scrum + "</tr>"
    }
    document.getElementById("target").innerHTML = "<table id='tbody'>" + scrum + "</table>"
})();
*/


(function() {

    function tableStart() {
        let element = document.getElementById("target");
        let tbl = document.createElement('table');
        tbl.setAttribute("width", "100%")
        tbl.setAttribute('border', '1');
        //Create columns
        let col = document.createElement('tbody');
        for (let i = 0; i < 10; i++) {
            //rows
            let tr = document.createElement('tr');
            for (let z = 0; z < 10; z++) {
                if (i == 10 && z == 10) {
                    break
                } else {
                    let td = document.createElement('td');
                    tr.appendChild(td)
                }
            }
            col.appendChild(tr);
        }
        tbl.appendChild(col);
        element.appendChild(tbl)
    }
    tableStart();

let table = document.getElementsByTagName("table");
    //calculation to go up a cell until 9
    for (let a = 0; a <= 9; a++){
        //if number exceeds or is equal to 10, break and go to next row
        if ( a == 10 && b ==10) {
            break
        } else {
            //calculation to go up a cell until 9
            for (let b = 0; b <= 9; b++) {
                //Variable is connected to cells and table content
                let c = table[0].rows[b].cells;
                //calculations create variables to calculation with
                let d = b + 1;
                let e = a + 1;
                //actual calculation
                let f = d * e;
                //change cell html content
                c[a].innerHTML = f;

            }
        }
    }

})();
