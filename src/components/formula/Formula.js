import {ExcellyComponent} from '@core/ExcellyComponent';

export class Formula extends ExcellyComponent {
    className = 'xcFormula';

    constructor(root) {
        super(root, {listeners: ['input']});
    }

    toHtml() {
        return `
            <div class="xcFormula__fx">
                <div>fx=</div>
            </div>
            <div class="xcFormula__input" contenteditable></div>
`;
    }

    onInput(event) {
        console.log(event.target.textContent);
    }
}
