import {ExcelComponent} from "@core/ExcelComponent";

export class ExcelStoreComponents extends ExcelComponent {
    constructor(...args) {
        super(...args)
    }

    get template() {
        console.log('template-store')
        return JSON.stringify(this.state, null, 4)
    }

    initState(initialState) {
        this.state = {...initialState}
    }

    setState(newState) {
        this.state = {...this.state, ...newState}
        this.$root.html(this.template)
    }
}