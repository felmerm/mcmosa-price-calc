let quantity = 0;
let selectedProduct = null;
let selectedPrice = null;
let quantityInput = document.getElementById("quantity");
let calculation = document.getElementById("calculation");
let orderList = document.getElementById("orderList");

function selectProduct(productName, price) {
    selectedProduct = productName;
    selectedPrice = price;
    updateCalculation();
}

function changeQuantity(delta) {
    quantity += delta;
    if (quantity < 0) quantity = 0;
    quantityInput.value = quantity;
    updateCalculation();
}

function updateCalculation() {
    if (selectedProduct === null || quantity === 0) {
        calculation.textContent = "";
    } else {
        let total = selectedPrice * quantity;
        calculation.textContent = `${quantity} x ${selectedProduct} ($${selectedPrice}) = $${total.toFixed(2)} total`;
    }
}

function addOrder() {
    if (selectedProduct === null || quantity === 0) {
        alert("Please select a product and set a quantity.");
        return;
    }

    let listItem = document.createElement("li");
    listItem.className = "order-item";
    listItem.textContent = `${quantity} x ${selectedProduct} ($${selectedPrice})`;

    let removeButton = document.createElement("span");
    removeButton.className = "remove-order-item";
    removeButton.textContent = "Remove";
    removeButton.onclick = function () {
        orderList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    orderList.appendChild(listItem);

    // Reset selection and quantity
    selectedProduct = null;
    selectedPrice = null;
    quantity = 0;
    quantityInput.value = 0;
    updateCalculation();
}

function cancelOrder() {
    selectedProduct = null;
    selectedPrice = null;
    quantity = 0;
    quantityInput.value = 0;
    updateCalculation();
}
