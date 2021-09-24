let container = document.querySelector('.container');
let resetButton = document.querySelector('.reset');

function mouseover(e) {
    let mouseOverCount = e.target.getAttribute('mouse-over-count');
    mouseOverCount++;
    e.target.setAttribute('mouse-over-count', mouseOverCount);
    let hue = Math.floor(Math.random()*360);
    let saturation = Math.floor(Math.random()*100);
    let lightness = Math.max(100-10*mouseOverCount, 0);
    e.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    console.log(e.target.style.backgroundColor);
}

function fillGrid(n) {
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    let width = 960 / n - 2.5;
    let height = 960 / n - 2.5;
    for (let i = 0; i < n * n; i++){
        let element = document.createElement('div');
        element.className = "square";
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
        element.style.margin = "0px";
        element.addEventListener('mouseover', mouseover);
        element.setAttribute('mouse-over-count', '0');
        container.appendChild(element);
    }
    //resetButton.style.marginTop = `${n/2}px`;
}

function resetGrid(e) {
    let gridSize = parseInt(prompt('This will clear the screen. Please input the size of the new grid.', '16'));
    if (Number.isNaN(gridSize)) {return;}
    if (!Number.isInteger(gridSize)) {return;}
    if (!(gridSize >=10 && gridSize<=100)) {return;}
    container.innerHTML = '';
    fillGrid(gridSize);
}

resetButton.addEventListener('click', resetGrid);

fillGrid(16);