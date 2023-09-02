function addRows(parentDiv, dimensions) {
  for (let i = 0; i < dimensions; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("flex-container");
    rowDiv.classList.add("flex");
    for (let j = 0; j < dimensions; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("grid-element");
      columnDiv.classList.add("flex");
      addHoverEvents(columnDiv);
      rowDiv.appendChild(columnDiv);
    }
    parentDiv.appendChild(rowDiv);
  }
}

function addHoverEvents(div) {
  div.addEventListener("mouseover", () => {
    div.classList.add("active-grid-element");
  });
  div.addEventListener("mouseout", () => {
    div.classList.remove("active-grid-element");
  });
}

function displayPrompt() {
  let isValidInput = false;
  let message = "Number of squares per side";
  while (!isValidInput) {
    let gridDimensions = prompt(message);
    if (gridDimensions !== null) {
      gridDimensions = parseInt(gridDimensions);
      if (gridDimensions !== NaN && gridDimensions <= 100) {
        isValidInput = true;
        constructGrid(gridDimensions);
      }
      message = "Please enter a number less than or equal to 100";
    } else {
      isValidInput = true;
    }
  }
}

function constructGrid(dimensions = 16) {
  const parentDiv = document.getElementById("parentDiv");
  parentDiv.replaceChildren();
  addRows(parentDiv, dimensions);
}

constructGrid();
