import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from "@/components/table/table-resize";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['click', 'mousedown', 'mouseup']
        })
    }

    toHTML() {
        return createTable(100)
    }

    onMousedown(event) {
        if (event.target.dataset.resize) {
            resizeHandler(this.$root, event)
        }
    }

    onClick() {
        console.log('onclick')
    }

    onMouseup() {
        console.log('onmouseup')
    }
}