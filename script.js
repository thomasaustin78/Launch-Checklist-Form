// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then
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
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
            let launchStatus = document.getElementById("launchStatus")
               fuelStatus.innerHTML = "Not enough fuel for launch"
               document.getElementById("faultyItems").style.visibility = "visible"
               pilotStatus.innerHTML = `${str} is Ready` 
               copilotStatus.innerHTML = `${copilotStr} is Ready`;
               launchStatus.innerHTML = "Shuttle not ready for launch"
               document.getElementById("launchStatus").style.color = "red"
         }else if (cargoMassInput.value > 10000){
            let cargoStatus = document.getElementById("cargoStatus")
            let launchStatus = document.getElementById("launchStatus")
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
               cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"         
               document.getElementById("faultyItems").style.visibility = "visible"
               launchStatus.innerHTML = "Shuttle not ready for launch"
               document.getElementById("launchStatus").style.color = "red"
               pilotStatus.innerHTML = `${str} is Ready`  
           
            copilotStatus.innerHTML = `${copilotStr} is Ready`;
         } else{
            let launchStatus = document.getElementById("launchStatus")
               launchStatus.innerHTML = "Shuttle is ready for launch"
               document.getElementById("launchStatus").style.color = "green"
         }
            event.preventDefault();
   });
});