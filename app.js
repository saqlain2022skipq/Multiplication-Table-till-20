alert("Welcome To my Page")

confirm (" Do you want to see the Table of any Number?")

var num = prompt("Enter the number: ")

document.write(`TABLE OF ${num}`+"<br>")

if (num <= 20){

    for (num; num<=20; num++){

        for (i=1 ; i<= 10; i++){
            document.write(`${num} x ${i} = `, num*i + "<br>");
        }
    }
}
else{
    document.write('The Number is greater than 20!')
}
