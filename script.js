let quantity = 0;
let productSelect = document.getElementById("productSelect");
let quantityInput = document.getElementById("quantity");
let calculation = document.getElementById("calculation");
let orderList = document.getElementById("orderList");

function changeQuantity(delta) {
    quantity += delta;
    if (quantity < 0) quantity = 0;
    quantityInput.value = quantity;
    updateCalculation();
}

function updateCalculation() {
    if (productSelect.value == "0" || quantity == 0) {
        calculation.textContent = "";
    } else {
        let price = parseFloat(productSelect.value);
        let total = price * quantity;
        calculation.textContent = `${quantity} x $${price} = $${total.toFixed(2)} total`;
    }
}

function saveOrder() {
    if (productSelect.value == "0" || quantity == 0) {
        alert("Please select a product and set a quantity.");
        return;
    }
    
