const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma sequência de números para embaralhá-los (formato: 1,2,3,4,5): ", (input) => {

    const arr = input.split(",").map(Number);
    const arr2 = [];

    for (let i = 0; i < arr.length; i = i + 2) {
        if (i == arr.length - 1) {
                arr2.push(arr[i]);
            } else {
                arr2.push(arr[i + 1]);
                arr2.push(arr[i]);
            }
        }

    console.log(arr2)

    rl.close();

});

