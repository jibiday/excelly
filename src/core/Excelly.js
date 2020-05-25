export class Excelly {
    getRoot(selector) {
        return document.querySelector(selector);
    }

    bootstrap(components) {
        const root = this.getRoot('#app');
        components.forEach(Component => {
            const el = document.createElement('div');
            const comp = new Component(el);
            el.className = comp.className;
            el.innerHTML = comp.toHtml();
            root.insertAdjacentElement('beforeend', el);
            comp.init();
        });
    }
}
