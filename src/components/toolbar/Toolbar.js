import {ExcellyComponent} from '@core/ExcellyComponent';

export class Toolbar extends ExcellyComponent {
    className = 'xcToolbar'

    constructor(root) {
        super(root, {listeners: []});
    }

    toHtml() {
        return `<div></div>`
    }

    onClick() {
        console.log(this);
    }
}
