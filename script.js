function addRows(parentDiv) {
  for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("flex-container");
    rowDiv.classList.add("flex");
    for (let j = 0; j < 16; j++) {
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

const parentDiv = document.getElementById("parentDiv");
addRows(parentDiv);
