import {ExcellyComponent} from '@core/ExcellyComponent';
import {renderTable} from '@/components/table/table.template';
import {TableSelector} from "@/components/table/table.selector";

export class Table extends ExcellyComponent {
    className = 'xcTable'
    INIT_COL_NUMBER = 15;
    selector = new TableSelector();

    constructor(root) {
        super(root, {listeners: ['mousedown']});
    }

    toHtml() {
        return renderTable(this.INIT_COL_NUMBER);
    }

    init() {
        super.init();
        const firstCell = document.querySelector('[data-id="0:0"]');
        this.selector.select(firstCell)
    }
    
    onMousedown(event) {
        const resizer = event.target;
        const resize = resizer.dataset.resize;
        if (resize) {
            if (resize === 'column') {
                const parent = resizer.closest('[data-type="resizable"]');
                let colNumber = parent.dataset['col'];
                const colCells = this.root.querySelectorAll(`[data-col="${colNumber}"]`);
                const rect = parent.getBoundingClientRect();

                resizer.style.opacity = 1;
                resizer.style.height = +getComputedStyle(resizer)
                    .getPropertyValue('--cell-height')
                    .split('px')[0] * this.INIT_COL_NUMBER + 'px';

                let delta = 0
                const mouseMoveHandler = e => {
                    delta = rect.right - e.pageX
                    resizer.style.right = delta + 'px'
                }
                const mouseUpHandler = () => {
                    colCells.forEach(cell => cell.style.minWidth = (rect.width - delta) + 'px')

                    resizer.style.right = 0;
                    resizer.style.opacity = 0;
                    resizer.style.height = getComputedStyle(resizer)
                        .getPropertyValue('--cell-height');

                    document.removeEventListener('mousemove', mouseMoveHandler);
                    document.removeEventListener('mousemove', mouseUpHandler);
                }
                document.addEventListener('mousemove', mouseMoveHandler)
                document.addEventListener('mouseup', mouseUpHandler)
            }
        } else {
            if (event.shiftKey) {
                this.selector.selectGroup(event.target)
            } else {
                this.selector.select(event.target);
            }
        }
    }
}
