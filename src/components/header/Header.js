import {ExcellyComponent} from '@core/ExcellyComponent';

export class Header extends ExcellyComponent {
    className = 'xcHeader';

    constructor(root, options) {
        super(root, {listeners: [], ...options});
    }

    toHtml() {
        return `<div></div>`;
    }
}
