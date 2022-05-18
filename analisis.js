const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numerito){
    /*
    if(numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
    */
   return (numerito % 2 ===0);//una manera más eficiente de hacer lo mismo
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);

        return mediana;

    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

console.log(medianaSalarios(salariosColSorted));

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//funciones helpers, o utils (iutils)

//mediana del top 10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salarios10ColTop10 = salariosColSorted.splice(spliceStart, spliceCount);
const medianaTop10Col = medianaSalarios(salarios10ColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
})

