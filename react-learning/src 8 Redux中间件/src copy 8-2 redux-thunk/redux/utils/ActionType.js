function getRandomStr(num) {
    return Math.random().toString(36).substr(2, num).split("").join('.')
}

 const ActionType={
    INIT() { return `@@redux/INIT${getRandomStr(6)}` },
    UNKNOWN() { return `{@@redux/PROBE_UNKNOWN_ACTIONt${getRandomStr(6)}` }
}
export default ActionType;