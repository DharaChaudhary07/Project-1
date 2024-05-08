
document.getElementById('product-name').innerHTML="Product Name: "
document.getElementById('product-price').innerHTML="Product Price: "
document.getElementById('total').innerHTML="Total: "
document.getElementById('discount').innerHTML="Discount: "
document.getElementById('bill').innerHTML="Bill Amount: "
function bill() {
    
    var productPrice = 20;

    document.getElementById('product-name').innerHTML = "Product Name: Pen";
    document.getElementById('product-price').innerHTML = "Product Price: 20";
    document.getElementById('total').innerHTML = "Total: 20";
    document.getElementById('discount').innerHTML = "Discount: 2%";
    
    var total = productPrice;
        var discount = 2 * total / 100;

    var bill = total - discount;

    document.getElementById('bill').innerHTML = "Bill Amount: " + bill.toFixed(2);

}