const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a primeira data (formato: AAAA-MM-DD): ", (input1) =>{
    rl.question("Digite a segunda data (formato: AAAA-MM-DD): ", (input2) => {

        const data1 = new Date(input1);
        const data2 = new Date(input2);

        if (data1.getTime() > data2.getTime()){
            console.log("A primeira data é maior que a segunda.");
        } else if (data1.getTime() < data2.getTime()) {
            console.log("A segunda data é maior que a primeira.");
        } else {
            console.log("As duas datas são iguais.")
        }

        rl.close();
    });
});

