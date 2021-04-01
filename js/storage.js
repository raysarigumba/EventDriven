customers = []
customerOrder = {
    'ORNumber' : '',
    'name': '',
    'items': [],
    'total': 0
}

var meals = []; var items = [i1, i2, i3, i4]; var prices = [p1, p2, p3, p4]; var qtys = [q1, q2, q3, q4]; var subtotals = [st1, st2, st3, st4];
var storage = JSON.parse(localStorage.getItem('customers'))

save.addEventListener('click', function(){
    customer['ORNumber'] = oNumber.value
    customer['name'] = cName.value
    for(var i = 0; i < respo["meals"].length; i++){
        meals.push(respo["meals"][i]['strMeal'])
    }
    for(var i = 0; i < items.length; i++){
        if(items[i].value == ''){
            break
        }
        else{
            for(var ii = 0; ii < meals.length; ii++){
                if(items[i].value == meals[ii]){
                    item = { //TO OVERWRITE PREVIOUS ITEM CONTENT
                        'name': items[i].value,
                        'price' : prices[i].value,
                        'qty': qtys[i].value,
                        'subtotal' : subtotals[i].value, 
                        'thumbnail' : respo["meals"][ii]['strMealThumb']         
                    } 
                    customerOrder['total'] = parseFloat(customerOrder['total']) + parseFloat(item['subtotal'])
                    customerOrder['items'].push(item)
                    break
                }
            }
            
        }
    }

    

   if(storage != null){ //CHECK IF LOCALSTORAGE IS EMPTY
       storage.push(customer) //SAVE EXISTING DATA
       localStorage.setItem('customers', JSON.stringify(data))//SAVE TO LOCAL STORAGE WITH UPDATED DATA
   }
   else{
       customers.push(customerOrder)
       localStorage.setItem('customers', JSON.stringify(customers))// CREATES 'CUSTOMERS' KEY WITH CUSTOMERS
   }
   location.reload() 
})