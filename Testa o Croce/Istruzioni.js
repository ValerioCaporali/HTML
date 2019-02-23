jQuery(document).ready(function ($) {


    $('#coin').on('click', function () {

        var scelta = prompt("Inserire scelta (Testa o Croce): ");
        document.getElementById("risultato").innerText = ' ';
        var flipResult = Math.random();
        $('#coin').removeClass();
        setTimeout(function () {
            if (flipResult <= 0.5) {
                $('#coin').addClass('heads');
                console.log('it is head');

                setTimeout(function () {
                    if ("Testa" == scelta) {

                        document.getElementById("risultato").innerText = 'Hai vinto';

                    }

                    else {
                        document.getElementById("risultato").innerText = 'Hai perso'
                    }

                }, 3000)
            } else {

                $('#coin').addClass('tails');
                console.log('it is tails');

                setTimeout(function () {
                    if ("Croce" == scelta) {
                        document.getElementById("risultato").innerText = 'Hai vinto'
                    }

                    else {
                        document.getElementById("risultato").innerText = 'Hai perso'
                    }
                }, 3000)

            }
        }, 100)
    });
});


function myFunction () {
    var x = document.lastModified;
    document.getElementById("ultima").innerText = x;
}

function reset(){
    document.getElementById("ultima").innerText = ' ';
}

function message(){
    alert("Alert message dropdown");
}

