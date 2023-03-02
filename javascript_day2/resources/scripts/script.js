const ITEM_NAME = document.getElementById("itemName");
const ITEM_PRICE = document.getElementById("price");
const button = document.getElementById("submitBtn");

button.addEventListener("click",function(e){
    e.preventDefault;
    let itemName = getValue(ITEM_NAME).toUpperCase();
    let itemPrice = Number(getValue(ITEM_PRICE))+100;

    const details = `Item name is ${itemName} and price is ${itemPrice}`
    const form = document.querySelector('form');
    form.innerHTML=details;
})

function getValue(property){
    return property.value;
}
