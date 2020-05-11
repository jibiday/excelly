import {ExcellyComponent} from '../../core/ExcellyComponent';

export class Header extends ExcellyComponent {
    className = 'xcHeader';

    constructor(root) {
        super(root, {listeners: ['input']});
    }

    toHtml() {
        return `<h1>Hedor</h1>`;
    }
}
