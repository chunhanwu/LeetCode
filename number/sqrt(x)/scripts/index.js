/**
 * @param {number} x
 * @return {number}
 */

function mySqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 1, right = x; //initialize binary search indices
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid ** 2 === x) { // the value is equal
            break;
        } else if (mid ** 2 > x) { // the value is large
            right = mid;
        } else if (mid ** 2 < x && (mid + 1) ** 2 < x) { // the value is small
            left = mid;
        } else {
            if ((mid + 1) ** 2 == x) {
                mid++;
            }
            break;
        }
    }
    return mid;
};

console.warn('input', 10)
console.warn('output', mySqrt(10))
