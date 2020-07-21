// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("launchForm");
      launchForm.addEventListener("submit", function(event) {
         let pilotNameInput = document.getElementById("pilotName");
         let coPilotNameInput = document.getElementById("copilotName");
         let fuelLevelInput = document.getElementById("fuelLevel");
         let cargoMassInput = document.getElementById("cargoMass");
         if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
                 
         }else if(fuelLevelInput.value < 10000){
            let fuelStatus = document.getElementById("fuelStatus")
            fuelStatus.innerHTML = "Not enough fuel for launch"
            document.getElementById("faultyItems").style.visibility = "visible"
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            pilotStatus.innerHTML = `${str} is Ready`  
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
            copilotStatus.innerHTML = `${copilotStr} is Ready`;
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
         }else if (cargoMassInput.value > 10000){
            let cargoStatus = document.getElementById("cargoStatus")
            cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
            document.getElementById("faultyItems").style.visibility = "visible"
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red"
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            pilotStatus.innerHTML = `${str} is Ready`  
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
            copilotStatus.innerHTML = `${copilotStr} is Ready`;
         } else{
            let launchStatus = document.getElementById("launchStatus")
            launchStatus.innerHTML = "Shuttle is ready for launch"
            document.getElementById("launchStatus").style.color = "green"
         }
            event.preventDefault();
   });
});