function suma(primerNumero, segundoNumero, debeImprimir) {
    if (debeImprimir == true) {
    console.log(primerNumero + segundoNumero);
    return;
    }

    console.log("Pasó la condicional");

    return primerNumero + segundoNumero; 
}


suma("1", 4, 1);
suma("1", 4, true);

console.log('Hello World');