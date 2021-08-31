// Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// 1. Salvo i dati del passaggero nelle var: nome, km e ageGroup
// 2. Creo una var price dove calcolo il prezzo in base ai km (0.21 € al km)
// 3. Creo una condizione if per applicare lo sconto
// 4. Creo var per la carrozza e il numero di pronotazione cge genera un mumero random
// 5. Creo una funzione per evento click che stampa i dati attraverso nelle caselle giuste document.getElementById(id).innerHTML =
// 6. Creo una funzione per evento clck -cancel che unnulla tutti i dati inseriti

var btnCalc = document.getElementById("calc-ticket");
var btnCancel = document.getElementById("cancel");
var carriageNumber = Math.floor((Math.random() * 20) + 1);
var bookingNumber = Math.floor((Math.random() * 4000) + 1);


btnCalc.addEventListener("click",
    function(){
        var nomePassanger = document.getElementById("name").value;
        // "name" è ID che abbiamo indicato nella ticket-form
        var km = parseInt(document.getElementById("km").value);
        var ageGroup = document.getElementById("age-group").value;

        // calcolo del biglietto
        var price = (km * 0.21).toFixed(2);
        var discount20off = "20%";
        var discount40off = "40%";
        var fullPrice = "Biglietto Standard"

        if (ageGroup == "minorenne"){
         price = ((price / 100) * 80);
         document.getElementById("discout").innerHTML = discount20off;
      
    
        }
        else if (ageGroup == "maggiorenne") {
        price == price;
        document.getElementById("discout").innerHTML = fullPrice;
        
        } 
        else{
         price = ((price / 100) * 60);
         document.getElementById("discout").innerHTML = discount40off;
 
        }

        // stampo i dati inseriti e il calcolo del biglietto nella tabella
        // questi ID sono della tabella!
        document.getElementById("total-price").innerHTML = price;
        document.getElementById("passanger-name").innerHTML = nomePassanger;
        document.getElementById("carriage-number").innerHTML = carriageNumber;
        document.getElementById("booking-number").innerHTML = bookingNumber;

        //apro il biglietto
        document.getElementById("final-price").classList.add("open");
    }
);

// btn annulla
btnCancel.addEventListener("click",
function(){
    document.getElementById("final-price").classList.remove("open");
    var nomePassanger = document.getElementById("name").value = "";
    var km = parseInt(document.getElementById("km").value = "");
}
);

