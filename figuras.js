//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// aquí interactuamos con HTML


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}


function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

function calcularAlturaTriangulo(){
    const triangulo1 = document.getElementById("inputTriangulo1");
    const triangulo2 = document.getElementById("inputTriangulo2");
    const trianguloBase = document.getElementById("inputTrianguloBase");
    const valueTriangulo1 = triangulo1.value;
    const valueTriangulo2 = triangulo2.value;
    const valueBase = trianguloBase.value;

    const area = alturaTrianguloIsosceles(valueTriangulo1, valueTriangulo2, valueBase);
    alert(area);
}


