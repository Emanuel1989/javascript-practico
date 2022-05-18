const lista1= [
    1,
    1,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    6,
    6,
    6,
    7,
    8
];

const lista1Count = {};//creamos un metodo vacío que luego vamos a ir llenando

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            //lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] += 1;//otra forma de hacer lo mismo
        }else{
            lista1Count[elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];
  




