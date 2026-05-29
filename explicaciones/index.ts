function sumaTs(primerNumero : number, segundoNumero : number, debeImprimir : boolean){
        if (debeImprimir == true) {
    console.log(primerNumero + segundoNumero);
    return;
    }

    console.log("Pasó la condicional");

    return primerNumero + segundoNumero; 
}
sumaTs(1, 4, true); //5

//sale error sumaTs("1", 4);

console.log('Hello World');