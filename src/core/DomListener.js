export class DomListener {
    constructor(root, listeners) {
        this.root = root;
        this.listeners = listeners || [];
    }
    
    addListeners() {
        this.listeners.forEach(listener => {
            const fnName = 'on' + listener[0].toUpperCase() + listener.slice(1);
            if (!this[fnName]) {
                throw new Error(`Listener for ${listener} is not provided in component ${this.constructor.name}`);
            }
            this[fnName] = this[fnName].bind(this)
            this.root.addEventListener(listener, this[fnName]);
        });
    }

    removeListeners() {
        this.listeners.forEach(listener => {
            const fnName = 'on' + listener[0].toUpperCase() + listener.slice(1);
            this.root.removeEventListener(listener, this[fnName]);
        })
    }
}
