// Select color input
// Select size input

// When size is submitted, call makeGrid()


// Your code goes here!

//make the function
function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    // loop for each row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        // loop for each cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    // add grid to table 
    table.innerHTML = grid;

    // Add click event to grid cells once the table grid has been created
    addClickEventToCells();
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

// add click events to all cells
function addClickEventToCells() {
    // on color selection return color:
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}



// on submit of form #sizePicker:
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};
