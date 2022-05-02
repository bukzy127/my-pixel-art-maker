// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var sizeInput= document.getElementById ('sizePicker');

const table = document.getElementById('pixelCanvas');

// store input value gridHeight and gridWidth

var width = document.getElementById('inputWidth');
var height = document.getElementById('inputHeight');
makeGrid(width, height)
// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('submit', (e) => {
    e.preventDefault();
    // clear existing table rows
    $('tr').remove();
    width = document.getElementById('inputWidth').value;
    height = document.getElementById('inputHeight').value;

    makeGrid(width, height);
});

function makeGrid(width, height) {

// Your code goes here!
    for (var a = 0; a < height; a++ ) {
        let i = table.insertRow(a);

        for (var b = 0; b < width; b++){
            let j = i.insertCell(b);

        // Color Canvas
            j.addEventListener('click', (e) => {
                j.style.backgroundColor = color.value;
            });
        }
    }

}



