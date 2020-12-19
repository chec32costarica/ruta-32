
fetch("datos.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table_puentes');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
    }
)