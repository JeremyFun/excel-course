import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from "@/components/table/table-resize";
import {TableSelection} from "@/components/table/TableSelection";
import {$} from "@core/dom";
import {isCell, shouldResize} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown', 'mouseup']
        })
    }

    prepare() {
        this.selection = new TableSelection()
    }

    toHTML() {
        return createTable(20)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
            const $target = $(event.target)
            this.selection.select($target)
        }
    }

    init() {
        super.init()
        const $cell = this.$root.find('[data-id="0:0"]')
        this.selection.select($cell)
    }

    onClick() {
        console.log('onclick')
    }

    onMouseup() {
        console.log('onmouseup')
    }
}