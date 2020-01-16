

export const KEY_CODES = Object.freeze({
    ENTER: 13,
    Z: 90
});


export function line(str, skipTrim) {
    const s = str.replace(/\s+/g, ' ');
    return skipTrim ? s : s.trim();
}


export function foldWhitespace(str) {
    let _str = str;

    return _str.replace(/\s/g, ' ')        // only allow spaces, not tabs, new lines, etc
}
