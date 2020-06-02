import {DomListener} from './DomListener';

export class ExcellyComponent extends DomListener {
    className = '';

    constructor(root, options) {
        super(root, options.listeners);
        this.emitter = options.emitter;
        this.unsubscribers = [];
    }

    emit(eventName, ...args) {
        this.emitter.emit(eventName, args);
    }

    on(eventName, fn) {
        const unsub = this.emitter.subscribe(eventName, fn);
        this.unsubscribers.push(unsub);
    }

    toHtml() {
        return '';
    }

    init() {
        this.addListeners();
    }

    destroy() {
        this.removeListeners();
        this.unsubscribers.forEach(unsub => unsub());
    }
}
