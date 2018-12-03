

/*var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}


document.write("<br>");
document.write("Ecquivalente a: <br>");
var temp;

switch (mm) {
    case 1:
        temp = 'Gennaio'
        break;

    case 2:
        temp = 'Febbraio'
        break;

    case 3:
        temp = 'Marzo'
        break;

    case 4:
        temp = 'Aprile'
        break;

    case 5:
        temp = 'Maggio'
        break;

    case 6:
        temp = 'Giugno'
        break;

    case 7:
        temp = 'Luglio'
        break;

    case 8:
        temp = 'Agosto'
        break;

    case 9:
        temp = 'Settembre'
        break;

    case 10:
        temp = 'Ottobre'
        break;

    case 11:
        temp = 'Novembre'
        break;

    case 12:
        temp = 'Dicembre'
        break;
}

document.write(dd + '/' + temp + '/' + yyyy);

function updateTitle() {
    var date = new Date();
    hh = date.getHours();
    minutes = date.getMinutes();
    if (hh < 10) {
        hh = '0' + hh;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    document.title = hh + ':' + minutes;
}

updateTitle();
setInterval(updateTitle, 6000);

oggi = new Date();
anno = oggi.getFullYear();
fineAnno = new Date(anno,11,32)

function quanti(tempo) {
    return(Math.floor(tempo.getTime()/(1000*60*60*24)))
}

function manca(giorni){
    return(quanti(giorni)-quanti(oggi))
}

document.write("<br><br>Mancano "+manca(fineAnno)+" giorni alla fine dell'anno");*/


window.onload = function () {

    var getDate = function () {
        var today = new Date();
        var a = today.getHours();
        var b = today.getMinutes();
        var c = today.getSeconds();

        document.getElementById("ore").innerText = a;
        document.getElementById("minuti").innerText = b;
        document.getElementById("secondi").innerText = c;
        var t = setTimeout(getDate, 1000);
    };
    getDate();
    var today = new Date();
    var z = today.getFullYear();
    var y = today.getMonth()+1;
    var x = today.getDate();
    document.getElementById("giorno").innerText = x;
    document.getElementById("mese").innerText = y;
    document.getElementById("anno").innerText = z;

    var temp;
    switch (today.getMonth()+1) {
        case 1:
            temp = 'Gennaio';
            break;

        case 2:
            temp = 'Febbraio';
            break;

        case 3:
            temp = 'Marzo';
            break;

        case 4:
            temp = 'Aprile';
            break;

        case 5:
            temp = 'Maggio';
            break;

        case 6:
            temp = 'Giugno';
            break;

        case 7:
            temp = 'Luglio';
            break;

        case 8:
            temp = 'Agosto';
            break;

        case 9:
            temp = 'Settembre';
            break;

        case 10:
            temp = 'Ottobre';
            break;

        case 11:
            temp = 'Novembre';
            break;

        case 12:
            temp = 'Dicembre';
            break;
    }

    document.getElementById("giorno1").innerText = x;
    document.getElementById("mese1").innerText = temp;
    document.getElementById("anno1").innerText = z;


    function updateTitle() {
        var date = new Date();
        hh = date.getHours();
        minutes = date.getMinutes();
        if (hh < 10) {
            hh = '0' + hh;
        }

        if (minutes < 10){
            minutes = '0' + minutes;
        }

        document.title = hh + ':' + minutes;
    }

    updateTitle();
    setInterval(updateTitle, 6000);


    oggi = new Date();
    anno = oggi.getFullYear();
    fineAnno = new Date(anno,11,32)

    function quanti(tempo) {
        return(Math.floor(tempo.getTime()/(1000*60*60*24)))
    }

    function manca(giorni){
        return(quanti(giorni)-quanti(oggi))
    }

    document.getElementById("mancante").innerText = ("Mancano "+manca(fineAnno)+" giorni alla fine dell'anno");
};




