// Add via stations
var viaStationCount = 0;

function spawnViaStation(){
    if(viaStationCount === 0){
        var via1 = document.getElementById("via1");
        var via1text = document.getElementById("via1text");
        via1.className = "";
        // Move text from destination to via1
        destination = document.getElementById("destination");
        via1text.value = destination.value;
        destination.value = "";
        viaStationCount++;
    } else if(viaStationCount === 1){
        var via2 = document.getElementById("via2");
        var via2text = document.getElementById("via2text");
        via2.className = "";
        // Move text from destination to via2
        destination = document.getElementById("destination");
        via2text.value = destination.value;
        destination.value = "";
        // Hide the via button
        button = document.getElementById("addVia");
        button.className = "hiddenElement";
        button.parentNode.style.display = "block";
        viaStationCount++;
    } else {
        alert("There may only be two via stations");
    }
}