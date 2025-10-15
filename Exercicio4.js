function imprimirData() {
    const data = new Date();
    const dataString = data.toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
    const dataTempoString = dataString.replace(",","");
    console.log(dataTempoString);
}

setInterval(imprimirData, 1000);