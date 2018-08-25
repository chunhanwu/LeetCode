let testNum = 120;
const maxVaule = 2 ** 31 - 1;  // 2147483647
const minVaule = -1 * 2 ** 31; //-2147483648

//math
function reverseByMath(num) {
    let res = 0
    while (num !== 0) {
        let pop = num % 10;
        num = parseInt(num / 10);
        if (res > parseInt(maxVaule / 10) || (res === parseInt(maxVaule / 10) && pop > 7)) {
            return 0
        }
        if (res < parseInt(minVaule / 10) || (res === parseInt(minVaule / 10) && pop < -8)) {
            return 0
        }
        // return (res < MIN_VALUE || res > MAX_VALUE) ? 0 : res;
        res = res * 10 + pop;
    }
    return res;
};

//String
function reverseByString(num) {
    let reversedInt = (+String(Math.abs(num)).split('').reverse().join('')) * Math.sign(num);
    return (reversedInt < minVaule || reversedInt > maxVaule) ? 0 : reversedInt
};
console.warn('testNum', testNum)
console.warn('reverseByMath(testNum)', reverseByMath(testNum))
console.warn('reverseByString(testNum)', reverseByString(testNum))