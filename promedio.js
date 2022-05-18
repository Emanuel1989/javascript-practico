const lista1 = [
    100,
    200,
    300,
    600,
    500
];

//sumamos todos los nros de la lista

let sumaLista1 = 0;

for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

///

function calcularMediaAritmetica(lista){
    let sumaLista = 0;

    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }

    return sumaLista / lista.length;
}