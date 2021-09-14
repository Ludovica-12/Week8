//Javascript

/*Commento
  su 
  più 
  linee*/

//console.log("Ciao"); //per scrivere nella console

//Linguaggio debolmente tipizzato
let n = 1;
n = 12;
n = "Dodice";

//Funzione 
function demo() {
    console.log("Prima di essere dichiarata: " + k);
    var k = 2;
    console.log("Dopo essere dichiarata: " + k);

    //console.log("Prima di essere dichiarata: " + x);
    let x = 2;
    console.log("Dopo essere dichiarata: " + x);
}

//Eventi
function demoOnLoad() {
    alert("Ciao");
}

function demoOnClick() {
    alert("Hai cliccato il tasto")
}

function demoOnKeyDown() {
    alert("Hai premuto un tasto della tastiera")
}

function demoOnChange() {
    alert("Hai selezionato qualcosa")
}

function checkSelection() {
    let checkBox = document.getElementById("available");

    if (checkBox.checked) //if (checkBok.checked == true)
    {
        alert("L'oggetto è disponibile")
    }
    else {
        alert("L'oggetto non è disponibile")
    }
}

function changeButtonVisibility() {
    //username è popolato?
    //si => visibility = "visible"
    //no => resta hidden

    let usernameInput = document.getElementsByClassName("username");
    let button = document.getElementById("submit");

    if (usernameInput.value != "") {
        button.style.visibility = "visible";
    }
}

function changeButton() {
    //username è popolato?
    //si => disabled = ""
    //no => resta disabled

    let usernameInput = document.getElementsByClassName("username");
    let button = document.getElementById("submit2");

    if (usernameInput.value != "") {
        button.disabled = "";
    }
}