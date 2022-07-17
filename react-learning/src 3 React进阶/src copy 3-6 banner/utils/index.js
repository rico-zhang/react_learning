export function limitNumber(num, min, max) {
    if (num < min)
        num = min
    else if (num > max)
        num = max
    return num;
}
