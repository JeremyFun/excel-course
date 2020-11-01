import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.prepare()
    }

    prepare() {}

    toHTML() {
        return ''
    }

    $emit(eventName, fn) {
        this.emitter.emit(eventName, fn)
    }

    $on(eventName, fn) {
        this.emitter.subscribe(eventName, fn)
    }

    init() {
        this.initDOMListeners()
    }

    destroy() {
        this.removeDOMListeners()
    }
}