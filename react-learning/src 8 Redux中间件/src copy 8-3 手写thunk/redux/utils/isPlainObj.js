export default function isPlainObj(obj) {
    if (obj === null || typeof (obj) !== "object")
        return false;
    if (Object.getPrototypeOf(obj) !== Object.prototype)
        return false
    return true;
}