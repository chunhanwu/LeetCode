

//math
function reverseByMath(num) {
    let max = 2**31-1;  // 2147483647
    let min = -1*2**31; //-2147483648
    let rev = 0
    while(num!==0){
        let pop = num % 10;
        num = parseInt(num / 10);
        rev = rev * 10 + pop;
    }
    return rev;
};
console.warn('reverseByMath(num)',reverseByMath(102))