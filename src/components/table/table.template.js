export function renderTable(rows) {
    return new Array(rows)
        .fill('')
        .map((_, index) => renderRow(index))
        .join('')
}

const CHAR = {
    A: 65,
    Z: 91,
}

function renderAlphabetHeaderCells() {
    return new Array(CHAR.Z - CHAR.A)
        .fill('')
        .map((_, i) => renderAlphabetCell(i))
        .join('')
}

function renderAlphabetCell(index) {
    return `<div class="xcAlphabetCell" data-type="resizable" data-col="${index}">
                ${String.fromCharCode(CHAR.A + index)}
                <div class="xc-column-resize" data-resize="column">
                    <div class="xc-column-resize-separator"></div>
                </div>
            </div>`
}

function renderRow(rowIndex) {
    return `<div class="xcRow">` +
            renderNumberHeaderCell(rowIndex) +
            (rowIndex === 0 ? renderAlphabetHeaderCells() :
                new Array(CHAR.Z - CHAR.A)
                    .fill('')
                    .map((_, colIndex) => renderCell(colIndex, rowIndex))
                    .join(''))+
            `</div>`
}

function renderNumberHeaderCell(index) {
    return `<div class="xcNumberCell">
                ${index || ''}
                ${index > 0 ? '<div class="xc-row-resize" data-resize="row"></div>' : ''}
            </div>`
}

function renderCell(col, row) {
    return `<div class="xcCell" data-col="${col}" data-id="${col}:${row}" contenteditable></div>`
}
