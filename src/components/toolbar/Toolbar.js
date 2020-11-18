import {createToolbar} from "@/components/toolbar/toolbar.template";
import {$} from "@core/dom";
import {ExcelStoreComponents} from "@core/ExcelStoreComponents";

export class Toolbar extends ExcelStoreComponents {
    static className = 'excel__toolbar'

    constructor($root, options) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click'],
            ...options
        });
    }

    prepare() {
        const initialState = {
            textAlign: "left",
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
        }
        this.initState(initialState)
    }

    get template() {
        console.log('template-toolbar')
        return createToolbar(this.state)
    }

    toHTML() {
        return this.template
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.data.type === 'button') {
            const value = JSON.parse($target.data.value)
            const key = Object.keys(value)[0]
            this.setState({[key]: value[key]})
            console.log(this.state)
        }
    }
}