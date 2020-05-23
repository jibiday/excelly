import {ExcellyComponent} from '@core/ExcellyComponent';

export class Toolbar extends ExcellyComponent {
    className = 'xcToolbar'

    constructor(root) {
        super(root, {listeners: []});
    }

    toHtml() {
        return `<div class="xcToolbar__container">
                    <div class="xcButton"><span class="material-icons">format_align_left</span></div>
                    <div class="xcButton"><span class="material-icons">format_align_center</span></div>
                    <div class="xcButton"><span class="material-icons">format_align_right</span></div>
                    <div class="xcButton"><span class="material-icons">format_bold</span></div>
                    <div class="xcButton"><span class="material-icons">format_italic</span></div>
                    <div class="xcButton"><span class="material-icons">format_underlined</span></div>
                </div>`
    }
}
