export class TableSelector {
    current;

    select(element) {
        this.clear();
        this.current = element;
        this.markSelected(element)
    }

    selectGroup(element, startElement) {
        if (startElement) {
            this.current = startElement;
        }
        this.clear();
        let matrix = this.getMatrixIds(element);
        matrix.forEach(cellId => {
            let cell = document.querySelector(`[data-id="${cellId}"]`)
            this.markSelected(cell)
        })
    }

    markSelected(element) {
        element.classList.add('selected')
    }

    clear() {
        let cells = document.querySelectorAll('.xcCell.selected');
        cells.forEach(cell => cell.classList.remove('selected'))
    }

    getMatrixIds(element) {
        let id = element.dataset.id;
        let [col, row] = id.split(':').map(Number);
        let currentId = this.current.dataset.id;
        let [currCol, currRow] = currentId.split(':').map(Number);
        let result = [];
        if (col > currCol) {
            [col, currCol] = [currCol, col]
        }
        if (row > currRow) {
            [row, currRow] = [currRow, row]
        }
        for (let i = col; i <= currCol; i++) {
            for (let j = row; j <= currRow; j++) {
                result.push(`${i}:${j}`)
            }
        }
        return result;
    }
}