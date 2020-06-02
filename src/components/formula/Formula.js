import {ExcellyComponent} from '@core/ExcellyComponent';

export class Formula extends ExcellyComponent {
    className = 'xcFormula';

    constructor(root, options) {
        super(root, {listeners: ['keypress'], ...options});
    }

    toHtml() {
        return `
            <div class="xcFormula__fx">
                <div>fx=</div>
            </div>
            <div class="xcFormula__input" contenteditable></div>
`;
    }

    onKeypress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.emit('formula:input', event.target.textContent.trim())
        }
    }
}
