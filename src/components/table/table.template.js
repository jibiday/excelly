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

function renderRow(index) {
    return `<div class="xcRow">` +
            renderNumberHeaderCell(index) +
            (index === 0 ? renderAlphabetHeaderCells() :
                new Array(CHAR.Z - CHAR.A)
                    .fill('')
                    .map((_, i) => renderCell(i))
                    .join(''))+
            `</div>`
}

function renderNumberHeaderCell(index) {
    return `<div class="xcNumberCell">
                ${index || ''}
                ${index > 0 ? '<div class="xc-row-resize" data-resize="row"></div>' : ''}
            </div>`
}

function renderCell(index) {
    return `<div class="xcCell" data-col="${index}" contenteditable></div>`
}
