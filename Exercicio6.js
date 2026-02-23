function squareDigits(num){
    return Number(
        String(num)
            .split('')
            .map(digit => Math.pow(Number(digit), 2))
            .join('')
    );
}

console.log(squareDigits(9119));