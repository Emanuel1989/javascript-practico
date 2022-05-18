const precioOriginal = 100;
const descuento = 15;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log("El precio original es "+precioOriginal);
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento es $"+precioConDescuento;
}