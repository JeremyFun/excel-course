class Dom {
    constructor(selector) {
        this.$el = typeof selector == "string"
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === "string") {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.$el.html('')
        return this
    }

    append(node) {
        if (node instanceof Dom) {
            this.$el.append(node.$el)
        }
        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, className = '') => {
    const el = document.createElement(tagName)
    if (className) {
        el.classList.add(className)
    }
    return $(el)
}