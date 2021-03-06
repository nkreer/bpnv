// Add via stations
var viaStationCount = 0;
var viaStationLimit = 2;

function spawnViaStation(){
    // Notify users when they have reached the limit
    if(viaStationCount === viaStationLimit){
        alert("Only " + viaStationLimit + " via stations are possible.");
        return;
    }

    destination = document.getElementById("destination");
    
    if(viaStationCount < viaStationLimit){
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
    if(viaStationCount === viaStationLimit){
        button = document.getElementById("addVia");
        button.className = "hiddenElement";
        button.parentNode.style.display = "block";
    }

    // Focus back on the destination field for immediate next entry
    destination.focus();
}

document.addEventListener("keydown", function(event){
    var destination = document.getElementById("destination");
    // Only do the magic when the destination box is active
    if(destination === document.activeElement){
        // Spawn a new via station when the user presses enter and shift at the same time
        if(event.shiftKey && event.keyCode === 13){
            spawnViaStation();
        } else if
        // Continue with a search when enter is pressed
        (event.keyCode === 13){
            alert("Commencing search");
        }
    }
});