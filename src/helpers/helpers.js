// https://github.com/codex-src/heroicons.dev/blob/master/src/App/helpers/copyToClipboard.js
export function copyToClipboard (value) {
    const textarea = document.createElement("textarea")
    textarea.style.position = "absolute"
    textarea.style.left = "-9999px"
    textarea.style.top = "-9999px"
    textarea.value = value
    document.body.appendChild(textarea)
    const selection = document.getSelection()
    textarea.select()
    document.execCommand("copy")
    selection.removeAllRanges()
    document.body.removeChild(textarea)
}

export function toKebabCase (str) {
    return str.replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
}