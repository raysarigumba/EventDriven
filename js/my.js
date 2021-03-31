var subtotal = document.getElementById("subtotal");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
var amountPaid = document.getElementById("amountPaid");
var change = document.getElementById("change");
var pay = document.getElementById("submit");
function red(){
    pay.style.backgroundColor = "rgb(202, 9, 9)";
}
function green(){
    pay.style.backgroundColor = "green";
}
subtotal.addEventListener("change", function(){
    if(parseInt(subtotal.value) >= 100 && parseInt(subtotal.value) <= 10000){
        tax.value = parseInt(subtotal.value)*0.12;
        total.value = parseInt(subtotal.value)+parseInt(tax.value);
        amountPaid.disabled = false; amountPaid.value = total.value;
        change.value = parseInt(amountPaid.value) - parseInt(total.value);
        pay.disabled = false;  green();
    }
    else{
        amountPaid.disabled = true; 
        pay.disabled = true; red();
    }
})
amountPaid.addEventListener("change", function(){
    change.value = parseInt(amountPaid.value) - parseInt(total.value);
    if(parseInt(change.value)>=0){
        pay.disabled = false; green();
    }else{
        pay.disabled = true; red();
    }
})