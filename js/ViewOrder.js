var i1View = document.getElementById('i1View');
var i2View = document.getElementById('i2View');
var i3View = document.getElementById('i3View');
var i4View = document.getElementById('i4View');
var p1View = document.getElementById('p1View');
var p2View = document.getElementById('p2View');
var p3View = document.getElementById('p3View');
var p4View = document.getElementById('p4View');
var q1View = document.getElementById('q1View');
var q2View = document.getElementById('q2View');
var q3View = document.getElementById('q3View');
var q4View = document.getElementById('q4View');
var st1View = document.getElementById('st1View');
var st2View = document.getElementById('st2View');
var st3View = document.getElementById('st3View');
var st4View = document.getElementById('st4View');
var vItem = document.getElementById('viewItem');
var vOrders = document.querySelectorAll('#viewOrder');
var onumberView = document.getElementById('onumberView');
var cNameView = document.getElementById('cNameView');
var exit = document.getElementById('exit');
var storage = JSON.parse(localStorage.getItem("customers"));
var viewItemBody = document.getElementById('viewItemBody');
var items = [item1View, item2View, item3View, item4View];
var prices = [price1View, price2View, price3View, price4View];
var qtys = [qty1View, qty2View, qty3View, qty4View];
var subtotals = [subtotal1View, subtotal2View, subtotal3View, subtotal4View];
var orderNumber;


vItem.addEventListener("hidden.bs.modal",function(){
    viewItemBody.innerHTML = ''
})
vOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        console.log(e.target)
        orderNumber = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText //CATCH ORDER NUMBER THAT IS CLICKED
        for(var i = 0; i < storage.length; i++){
            if(storage[i]['ORNumber'] == orderNumber){    
                onumberView.value = storage[i]['ORNumber']
                cNameView.value = storage[i]['name']
                for(var ii = 0; ii < storage[i]['items'].length; ii++){
                    console.log(items[ii])
                    if(storage[i]['items'][ii]['name'] != ''){
                        var card = document.createElement("div")
                        card.className = "card"
                        card.style.width = "13.5rem"
                        card.style.height = "18rem"
                        card.style.backgroundColor = "grey"
                        var image = document.createElement("img")
                        image.src = storage[i]['items'][ii]['thumbnail']
                        image.style.height = "150px"
                        image.style.width = "150px"
                        var cardBody = document.createElement("div")
                        cardBody.className = "card-body"
                        var cardTitle = document.createElement("h6")
                        cardTitle.className = "card-title"
                        var cardTxtNode = document.createTextNode(storage[i]["items"][ii]["name"])
                        cardTitle.appendChild(cardTxtNode)
                        var cardPrice = document.createElement("p")
                        cardPrice.className = "card-text"
                        var priceTxtNode = document.createTextNode("Price: "+storage[i]["items"][ii]["price"])
                        
                        cardPrice.appendChild(priceTxtNode)
                        var cardQty = document.createElement("p")
                        cardQty.className = "card-text"
                        var qtyTxtNode = document.createTextNode("Quantity: "+storage[i]["items"][ii]["qty"])
                        cardQty.appendChild(qtyTxtNode)

                        cardBody.appendChild(cardTitle)
                        cardBody.appendChild(cardPrice)
                        cardBody.appendChild(cardQty)
                        card.appendChild(image)
                        card.appendChild(cardBody)
                        viewItemBody.appendChild(card)
                    }
                }
            }
        }
    })
})