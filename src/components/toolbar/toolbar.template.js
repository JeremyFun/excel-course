function toButton(button) {
    console.log('buttonValue', button.value)
    return `<div class="button ${button.active ? "active" : ""}">
        <i class="material-icons" data-type="button">${button.icon}</i>
    </div>`
}

export function createToolbar() {
    const keys = [
        {
            icon: 'format_align_left',
            active: false,
            value: 'textAlign: left'
        },
        {
            icon: 'format_align_center',
            active: false,
            value: 'textAlign: left'

        },
        {
            icon: 'format_align_right',
            active: false,
            value: 'textAlign: right'
        },
        {
            icon: 'format_bold',
            active: true,
            value: 'fontWeight: bold'
        },
        {
            icon: 'format_italic',
            active: true,
            value: 'fontStyle: italic'
        },
        {
            icon: 'format_underline',
            active: false,
            value: 'fontStyle: underline'
        }
    ]
    return keys.map(toButton).join('')
}