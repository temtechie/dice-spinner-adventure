const rollDiceBtn = document.querySelector(".roll-dice");
const diceElement = document.querySelector("#dice");
const rollHistoryEl = document.querySelector(".dice-history-list");
const clearhistoryBtn = document.getElementById("clear-history");

let historyList = []

function roleDice() {
    const newResultFace = Math.floor(Math.random() * 6) + 1
    let currentDiceFace = getDiceFace(newResultFace);
    diceElement.innerHTML = currentDiceFace
    historyList.push(newResultFace);
    // console.log("historyList", historyList);
    updateRollHistory()
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
      const listItem = document.createElement("li");
      console.log("i", i);
      listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
      rollHistoryEl.appendChild(listItem);
    }
  }
  


function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

rollDiceBtn.addEventListener("click", () => {
    diceElement.classList.add("roll-dice-animation");
    setTimeout(() => {
        diceElement.classList.remove("roll-dice-animation");
        roleDice()
    }, 1000)
})

clearhistoryBtn.addEventListener("click", ()=>{
    historyList = []
    updateRollHistory()
})