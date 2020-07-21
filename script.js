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
            event.preventDefault();     
      } else {
            let pilotStatus = document.getElementById("pilotStatus")
            let str = pilotNameInput.value
            pilotStatus.innerHTML = `${str} Ready`  
            let copilotStatus = document.getElementById("copilotStatus")
            let copilotStr = coPilotNameInput.value
            copilotStatus.innerHTML = `${copilotStr} Ready`;
      }
   });


//let faultyItems = document.getElementById("faultyItems");

// `
// <div  id="faultyItems">
//                 <ol>
//                     <li id="pilotStatus">${pilotNameInput} Ready</li>
//                     <li id="copilotStatus">${coPilotNameInput} Ready</li>
//                     <li id="fuelStatus">Fuel level high enough for launch</li>
//                     <li id="cargoStatus">Cargo mass low enough for launch</li>
//                 </ol>
//             </div>
// `          
// faultyItems.innerHTML = faultyItems
// This block of code shows how to format the HTML once you fetch some planetary JSON!
   // `
   // <h2>Mission Destination</h2>
   // <ol>
   //    <li>Name: ${}</li>
   //    <li>Diameter: ${}</li>
   //    <li>Star: ${}</li>
   //    <li>Distance from Earth: ${}</li>
   //    <li>Number of Moons: ${}</li>
   // </ol>
   // <img src="${}">
   // `
});