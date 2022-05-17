/*------------------GLOBAL VARIABLES---------------------*/

let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let blackButton = document.getElementById("black");
let orangeButton = document.getElementById("orange");
let purpleButton = document.getElementById("purple");
let lightBlueButton = document.getElementById("lightBlue");
let whiteButton = document.getElementById("white");
let currentColor = document.getElementById("currentColor");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let shuffleButton = document.getElementById("shuffle");
let colorButtons = document.querySelectorAll(".colorButton");
let cells = document.querySelectorAll(".cell");
let displayColorsParent = document.getElementById("displayColors");
let clearCell = document.getElementById("clearCell");
let gridContainer = document.getElementById("gridContainer");

/*------------------ON LOAD---------------------*/

removeCellNums(); //remove

/*------------------EVENT LISTENERS---------------------*/

//On start, enables the rest of the page buttons & sets current color to black
startButton.addEventListener("click", () => {
  startButton.disabled = "true"; //disable START
  resetButton.removeAttribute("disabled"); //enable RESET
  //shuffleButton.removeAttribute("disabled");
  clearCell.removeAttribute("disabled");
  colorButtons.forEach((button) => {
    //loop through colorButton class to enable all buttons
    button.removeAttribute("disabled");
    currentColor.textContent = "Black";
    changeCellBackground("black");
  });
});

//Listens for any color button click and changes the current color accordingly
displayColorsParent.addEventListener("click", (e) => {
  if (e.target.matches("#red")) {
    changeCellBackground("red");
  } else if (e.target.matches("#black")) {
    changeCellBackground("black");
  } else if (e.target.matches("#blue")) {
    changeCellBackground("blue");
  } else if (e.target.matches("#green")) {
    changeCellBackground("green");
  } else if (e.target.matches("#violet")) {
    changeCellBackground("violet");
  } else if (e.target.matches("#yellow")) {
    changeCellBackground("yellow");
  } else if (e.target.matches("#orange")) {
    changeCellBackground("orange");
  } else if (e.target.matches("#purple")) {
    changeCellBackground("purple");
  } else if (e.target.matches("#lightBlue")) {
    changeCellBackground("lightskyblue");
  } else if (e.target.matches("#white")) {
    changeCellBackground("white");
  }
});

//Clear Cell
clearCell.addEventListener("click", () => {
  changeCellBackground("lightgray");
  currentColor.textContent = "Clear cell";
});

//Reset Button clears board, enables start button, and disables all other buttons
resetButton.addEventListener("click", () => {
  window.confirm("Are you sure you want to RESET your grid?");
  resetButton.disabled = "true";
  clearCell.disabled = "true";
  startButton.removeAttribute("disabled");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "lightgray";
  });

  colorButtons.forEach((button) => {
    //loop through colorButton class to enable all buttons
    button.disabled = "true";
  });
});

//Shuffle Button shuffles the order of the grid elements randomly ---NOT COMPLETE
//shuffleButton.addEventListener("click" , () => {
//console.log(cells);
//shuffleDivs();
//});

/*-------FUNCTIONS----------*/

function removeCellNums() {
  //Loop over collection of grid cells
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

function changeCellBackground(color) {
  //Loop over collection of grid cells
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      //add event listeners to all cells in grid
      cell.style.backgroundColor = color;
    });
  });
}

//Couldn't get this function to work. If you have a tip to steer me in the right direction I plan to keep working on it
function shuffleDivs() {
  temp = cells.cloneNode(true);
  for (let i = cells.length + 1; i > 0; i--) {
    temp.appendChild(temp.children[(Math.random() * i) | 0]);
  }
  cells.parentNode.replaceChild(temp, cells);
}

/*--------------COLOR BUTTONS------------------*/

blackButton.addEventListener("click", () => {
  currentColor.textContent = "Black";
});

redButton.addEventListener("click", () => {
  currentColor.textContent = "Red";
});

blueButton.addEventListener("click", () => {
  currentColor.textContent = "Blue";
});
greenButton.addEventListener("click", () => {
  currentColor.textContent = "Green";
});
yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Yellow";
});
violetButton.addEventListener("click", () => {
  currentColor.textContent = "Violet";
});
orangeButton.addEventListener("click", () => {
  currentColor.textContent = "Orange";
});
purpleButton.addEventListener("click", () => {
  currentColor.textContent = "Purple";
});
lightBlueButton.addEventListener("click", () => {
  currentColor.textContent = "Light Blue";
});
whiteButton.addEventListener("click", () => {
  currentColor.textContent = "White";
});
