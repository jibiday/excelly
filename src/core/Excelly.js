import {Emitter} from "@core/Emitter";

export class Excelly {
    constructor() {
        this.emitter = new Emitter();
    }

    getRoot(selector) {
        return document.querySelector(selector);
    }

    bootstrap(components) {
        this.components = components;
        const root = this.getRoot('#app');
        const options = {emitter: this.emitter};
        components.forEach(Component => {
            const el = document.createElement('div');
            const comp = new Component(el, options);
            el.className = comp.className;
            el.innerHTML = comp.toHtml();
            root.insertAdjacentElement('beforeend', el);
            comp.init();
        });
    }

    destroy() {
        this.components.forEach(component => component.destroy());
    }
}
