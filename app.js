// JavaScript (app.js)
function generateTable() {
    var inputNum = document.getElementById("numberInput").value;
    var tableContainer = document.getElementById("tableContainer");

    if (!inputNum || isNaN(inputNum)) {
        alert("Please enter a valid number");
        return;
    }

    tableContainer.innerHTML = ""; 

    for (let num = inputNum; num <= 20; num++) {
        tableContainer.innerHTML += `<p><strong>TABLE OF ${num}</strong></p>`;

        for (let i = 1; i <= 10; i++) {
            tableContainer.innerHTML += `${num} x ${i} = ${num * i}<br>`;
        }
    }
}
