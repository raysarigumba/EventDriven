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
var items = [i1View, i2View, i3View, i4View];var prices = [p1View, p2View, p3View, p4View];var qtys = [q1View, q2View, q3View, q4View];
var subtotals = [st1View, st2View, st3View, st4View];var orderNumber;


vItem.addEventListener("hidden.bs.modal",function(){
    viewItemBody.innerHTML = ''
})
vOrders.forEach(function(viewOrder){
    viewOrder.addEventListener('click', function(e){
        console.log(e.target);
        orderNumber = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.innerText;
        for(var i = 0; i < storage.length; i++){
            if(storage[i]['ORNumber'] == orderNumber){    
                onumberView.value = storage[i]['ORNumber']
                cNameView.value = storage[i]['name']
                for(var ii = 0; ii < storage[i]['items'].length; ii++){
                    console.log(items[ii])
                    if(storage[i]['items'][ii]['name'] != ''){
                        var card = document.createElement("div");
                        card.className = "card"; card.style.width = "15rem"; card.style.height = "20rem"; card.style.backgroundColor = "grey";
                        var cImage = document.createElement("img");
                        cImage.src = storage[i]['items'][ii]['thumbnail']; cImage.style.height = "120px"; cImage.style.width = "200px"; cImage.style.paddingLeft = "50px"; cImage.style.paddingRight = "35px";
                        var cBody = document.createElement("div");
                        cBody.className = "card-body";
                        var cTitle = document.createElement("h6");
                        cTitle.className = "card-title";
                        var cNode = document.createTextNode(storage[i]["items"][ii]["name"]);
                        cTitle.appendChild(cNode);
                        var cPrice = document.createElement("p");
                        cPrice.className = "card-text";
                        var pNode = document.createTextNode("Price: "+storage[i]["items"][ii]["price"]);
                        cPrice.appendChild(pNode);
                        var cQty = document.createElement("p");
                        cQty.className = "card-text";
                        var qNode = document.createTextNode("Quantity: "+storage[i]["items"][ii]["qty"]);
                        cQty.appendChild(qNode);
                        cBody.appendChild(cTitle); cBody.appendChild(cPrice); cBody.appendChild(cQty);
                        card.appendChild(cImage); card.appendChild(cBody); viewItemBody.appendChild(card);
                    }
                }
            }
        }
    })
})