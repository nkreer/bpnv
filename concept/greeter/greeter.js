// Add via stations
var viaStationCount = 0;

function spawnViaStation(){
    destination = document.getElementById("destination");
    
    if(viaStationCount < 2){
        nextViaCount = viaStationCount + 1;
        var via = document.getElementById("via" + nextViaCount);
        var viatext = document.getElementById("via" + nextViaCount + "text");
        via.className = "";
        // Move text from destination to new via box
        viatext.value = destination.value;
        destination.value = "";
        viaStationCount++;
    }

    // Hide the via button when the maximum is reached
    if(viaStationCount === 2){
        button = document.getElementById("addVia");
        button.className = "hiddenElement";
        button.parentNode.style.display = "block";
    }

    // Focus back on the destination field for immediate next entry
    destination.focus();
}