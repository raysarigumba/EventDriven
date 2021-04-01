var meals = []; var it = [i1, i2, i3, i4]; var p = [p1, p2, p3, p4]; var q = [q1, q2, q3, q4]; var st = [st1, st2, st3, st4];
var storage = JSON.parse(localStorage.getItem('customers'));
customers = [];
customerOrder = {
    'ORNumber' : '',
    'name': '',
    'items': [],
    'total': 0
}

save.addEventListener('click', function(){
    customerOrder['ORNumber'] = oNumber.value
    customerOrder['name'] = cName.value
    for(var i = 0; i < response["meals"].length; i++){
        meals.push(response["meals"][i]['strMeal'])
    }
    for(var i = 0; i < items.length; i++){
        if(it[i].value == ''){
            break;
        }
        else{
            for(var ii = 0; ii < meals.length; ii++){
                if(it[i].value == meals[ii]){
                    item = { 
                        'name': it[i].value,
                        'price' : p[i].value,
                        'qty': q[i].value,
                        'subtotal' : st[i].value, 
                        'thumbnail' : response["meals"][ii]['strMealThumb']         
                    } 
                    customerOrder['total'] = parseFloat(customerOrder['total']) + parseFloat(item['subtotal'])
                    customerOrder['items'].push(item)
                    break
                }
            }
            
        }
    }

    

   if(storage != null){ //CHECK IF LOCALSTORAGE IS EMPTY
       storage.push(customerOrder) //SAVE EXISTING DATA
       localStorage.setItem('customers', JSON.stringify(storage))//SAVE TO LOCAL STORAGE WITH UPDATED DATA
   }
   else{
       customers.push(customerOrder)
       localStorage.setItem('customers', JSON.stringify(customers))// CREATES 'CUSTOMERS' KEY WITH CUSTOMERS
   }
   location.reload() 
})