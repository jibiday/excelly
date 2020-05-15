import {ExcellyComponent} from '@core/ExcellyComponent';

export class Header extends ExcellyComponent {
    className = 'xcHeader';

    constructor(root) {
        super(root, {listeners: []});
    }

    toHtml() {
        return `<div></div>`;
    }
}
