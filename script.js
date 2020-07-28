// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json()
   }).then(function(jsonArray){
      console.log(jsonArray);
         document.getElementById("missionTarget").innerHTML =
      `   
      <h2>Mission Destination</h2>
<ol>
   <li>Name: ${jsonArray[0].name}</li>
   <li>Diameter: ${jsonArray[0].diameter}</li>
   <li>Star: ${jsonArray[0].star}</li>
   <li>Distance from Earth: ${jsonArray[0].distance}</li>
   <li>Number of Moons: ${jsonArray[0].moons}</li>
</ol>
<img src="${jsonArray[0].image}"></img>
      `   
   })
   let form = document.querySelector("launchForm");
      launchForm.addEventListener("submit", function(event) {
         let pilotNameInput = document.getElementById("pilotName");
         let coPilotNameInput = document.getElementById("copilotName");
         let fuelLevelInput = document.getElementById("fuelLevel");
         let cargoMassInput = document.getElementById("cargoMass");
         if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
          
          } else if (pilotNameInput.value !== String){
               let fuelStatus = document.getElementById("fuelStatus")
               let pilotStatus = document.getElementById("pilotStatus")
               let str = pilotNameInput.value
               let copilotStatus = document.getElementById("copilotStatus")
               let copilotStr = coPilotNameInput.value
               let launchStatus = document.getElementById("launchStatus")
                  document.getElementById("faultyItems").style.visibility = "visible"
                  pilotStatus.innerHTML = `${str} is not acceptable input` 
                  launchStatus.innerHTML = "Shuttle not ready for launch"
                  document.getElementById("launchStatus").style.color = "red"
            
         } else if(coPilotNameInput.value !== String){
            let fuelStatus = document.getElementById("fuelStatus")
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
            let launchStatus = document.getElementById("launchStatus")
               document.getElementById("faultyItems").style.visibility = "visible" 
               copilotStatus.innerHTML = `${copilotStr} is not acceptable input`;
               launchStatus.innerHTML = "Shuttle not ready for launch"
               document.getElementById("launchStatus").style.color = "red"
         
         }else if(fuelLevelInput.value < 10000 || fuelLevelInput.value !== Number){
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
         }else if (cargoMassInput.value > 10000 || cargoMassInput.value !== Number){
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
         } 
          else{
            let launchStatus = document.getElementById("launchStatus")
               launchStatus.innerHTML = "Shuttle is ready for launch"
               document.getElementById("launchStatus").style.color = "green"
         }
            event.preventDefault();
   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/