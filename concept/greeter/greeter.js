// Add via stations
var viaStationCount = 0;

function spawnViaStation(){
    if(viaStationCount === 0){
        via1 = document.getElementById("via1");
        via1.className = "";
        // Move text from destination to via1
        destination = document.getElementById("destination");
        via1.value = destination.value;
        destination.value = "";
        viaStationCount++;
    } else if(viaStationCount === 1){
        via2 = document.getElementById("via2");
        via2.className = "";
        // Move text from destination to via2
        destination = document.getElementById("destination");
        via2.value = destination.value;
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