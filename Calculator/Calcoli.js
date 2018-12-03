function piu() {
    val1 = eval(document.getElementById('display').value);
    operazione = "piu";
    document.getElementById('display').value = '';
}

function meno() {
    val1 = parseInt(document.getElementById('display').value);
    operazione = "meno";
    document.getElementById('display').value = '';
}

function per() {
    val1 = parseInt(document.getElementById('display').value);
    operazione = "per";
    document.getElementById('display').value = '';
}

function diviso() {
    val1 = parseInt(document.getElementById('display').value);
    operazione = "diviso";
    document.getElementById('display').value = '';
}

function seconda() {
    operazione = "seconda";
    uguale();
}

function quarta() {
    operazione = "quarta";
    uguale();
}

function sesta() {
    operazione = "sesta";
    uguale();
}

function radice() {
    operazione = "radice";
    uguale();
}


function uguale() {
    val2 = parseInt(document.getElementById('display').value);
    switch (operazione) {
        case "diviso":
            soluzione = val1 / val2;
            break;

        case "per":
            soluzione = val1 * val2;
            break;

        case "meno":
            soluzione = val1 - val2;
            break;

        case "piu":
            soluzione = val1 + val2;
            break;

        case "seconda":
            soluzione = val2 * val2;
            break;

        case "quarta":
            soluzione = val2 * val2 * val2 * val2;
            break;

        case "sesta":
            soluzione = val2 * val2 * val2 * val2 * val2 * val2;
            break;

        case "radice":
            soluzione = Math.sqrt(val2);
            break;
    }

    document.getElementById("display").value = soluzione;
}

