import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from "@core/dom";

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
            const $resizer = $(event.target)
            // const $parent = $resizer.$el.closest(`[data-type="resizable"]`)
            const $parent = $resizer.closest(`[data-type="resizable"]`)
            const coords = $parent.getCoords()
            const type = $resizer.data.resize

            const cell = this.$root.findAll(`[data-cell="${$parent.data.col}"]`)

            document.onmousemove = e => {
                if (type === 'col') {
                    const delta = e.clientX - coords.right
                    const value = coords.width + delta
                    $parent.css({width: value + 'px'})
                    cell.forEach(cell => cell.style.width = value + 'px')
                } else {
                    const delta = e.clientY - coords.bottom
                    const value = coords.height + delta
                    $parent.css({height: value + 'px'})
                }
            }
            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }
        }
    }

    onClick() {
        console.log('onclick')
    }

    onMouseup() {
        console.log('onmouseup')
    }
}