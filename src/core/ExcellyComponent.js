import {DomListener} from './DomListener';

export class ExcellyComponent extends DomListener {
    className = '';

    constructor(root, options) {
        super(root, options.listeners);
    }

    toHtml() {
        return '';
    }

    init() {
        this.addListeners();
    }

    destroy() {
        this.removeListeners();
    }
}
