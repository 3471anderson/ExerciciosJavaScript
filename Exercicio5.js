for (let i = 1; i <= 6; i++) {
    let espaços = ''.repeat(6 - i);
    let asteristicos = '*'.repeat(2 * i - 1);
    console.log(espaços + asteristicos)
}