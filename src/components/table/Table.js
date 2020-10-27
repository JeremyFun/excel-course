import {ExcelComponent} from '@core/ExcelComponent'
import {$} from "@core/dom";
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from "@/components/table/table-resize";
import {TableSelection} from "@/components/table/TableSelection";
import {
    isCell,
    matrix,
    nextSelector,
    shouldResize
} from "@/components/table/table.functions";

export class Table extends ExcelComponent {
    static className = 'excel__table'

    constructor($root, options) {
        super($root, {
            name: 'Table',
            listeners: ['mousedown', 'keydown'],
            ...options
        })
    }

    toHTML() {
        return createTable(20)
    }

    prepare() {
        this.selection = new TableSelection()
    }

    init() {
        super.init()
        const $cell = this.$root.find('[data-id="0:0"]')
        this.selection.select($cell)
        this.emitter.subscribe('vladislav', (text) => {
            this.selection.current.text(text)
        })
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event)
        } else if (isCell(event)) {
            const $target = $(event.target)
            if (event.shiftKey) {
                const $cells = matrix($target, this.selection.current)
                    .map(el => this.$root.find(`[data-id="${el}"]`))
                this.selection.selectGroup($cells)
            } else {
                this.selection.select($target)
            }
        }
    }

    onKeydown(event) {
        const keys = [
            'Tab',
            'Enter',
            'ArrowLeft',
            'ArrowRight',
            'ArrowUp',
            'ArrowDown'
        ]

        if (keys.includes(event.key)) {
            event.preventDefault()
            const id = this.selection.current.id(true)
            const $next = this.$root.find(nextSelector(event.key, id))
            this.selection.select($next)
        }
    }
}
