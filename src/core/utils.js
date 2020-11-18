export function capitalize(string) {
    if (typeof string === "string") {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}

export function range(start, end) {
    if (start > end) {
        [end, start] = [start, end]
    }
    return new Array(end - start + 1)
        .fill('')
        .map((_, idx) => start + idx)
}

export function storage(key, data = null) {
    if (!data) {
        return JSON.parse(localStorage.getItem('key'))
    }
    return localStorage.setItem('key', JSON.stringify(data))
}

export function isEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        return JSON.stringify(a) === JSON.stringify(b)
    }
    return a === b
}