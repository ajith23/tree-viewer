
function submit() {
    const inputElement = document.getElementById('nodecount');
    buildTree(inputElement.value);
}

function getDiv(clazz, data) {
    const div = document.createElement('div');
    div.setAttribute('class', clazz);
    if (data) div.innerHTML=data;
    return div;
}

function getParentConnector(cellNumber){
    const fakeCell = document.createElement('div');
    if (cellNumber === 1) return fakeCell;
    fakeCell.setAttribute('class', 'connector-top-' + (cellNumber%2==0 ? 'right':'left'));
    return fakeCell;
}

function getChildConnector(cellNumber, size){
    const hasChild = cellNumber*2 <= size;
    const fakeCell = document.createElement('div');
    if (!hasChild) return fakeCell;
    fakeCell.setAttribute('class', 'connector-bottom');
    return fakeCell;
}

function buildTree(count) {
    console.log('buildingtree');
    const treeElement = document.getElementById('tree');
    treeElement.innerHTML = ""
    let masterCounter = count;
    let i=1;
    while (masterCounter) {
        const row = getDiv('row');
        treeElement.appendChild(row);
        for (let j=1; j<=i; j++) {
            const cell = getDiv('cell');
            const cellNumber = i+j-1;
            if (masterCounter <= 0) {
                // dummy row as count exhausted
                row.appendChild(cell);
            } else {
                cell.appendChild(getDiv('node', cellNumber));
                cell.appendChild(getParentConnector(cellNumber));
                cell.appendChild(getChildConnector(cellNumber, count));
                row.appendChild(cell);
                masterCounter--;
            }
        }
        i *= 2;
    }
}

buildTree(15);