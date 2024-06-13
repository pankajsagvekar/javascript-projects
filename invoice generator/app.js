const generateTable = () => {
    const rows = document.querySelector('#rows').value;
    const cols = document.querySelector('#cols').value;
    const table = document.querySelector('#table');

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td><input type="text"></td>`;
        table.appendChild(tr)
    }
}