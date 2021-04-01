var dTable = document.getElementById('dTable')
var tbody = displayTable.firstElementChild //NEEDED TO DISPLAY CONTENT
var o1 = null; var o2 = null;

if(storage != null){
    for(var i = 0; i < storage.length; i++){
        o1 = storage[i]; o2 = o1.getOwnPropertyNames(o1) //['ORNumber', 'name', 'items', 'total']
        var tRow = document.createElement('tr'); var bool = true
        for(var ii = 0; ii < o2.length; ii++){
            var tData = document.createElement('td')
            tData.scope = 'row'
            if(ii == 0 && checker){
                var tdTextNode = document.createTextNode(i + 1)
                tData.appendChild(tdTextNode);tRow.appendChild(td);tbody.appendChild(tRow);
                ii--; bool = false;
            }
            else{
                tData.className = 'text-center'
                if(ii == o2.length - 1){
                    var btn = document.createElement("BUTTON");
                    btn.setAttribute('data-bs-target', '#viewItem')
                    btn.innerHTML = "View";    
                    btn.className = "btn btn-primary mb-2"; 
                    btn.id = "viewOrder";              
                    document.body.appendChild(btn);
                    btn.setAttribute('data-bs-toggle', 'modal');
                    tData.appendChild(btn); tRow.appendChild(td); tbody.appendChild(tr);
                }
                else if(ii == o2.length - 2){
                    var result = storage[i][o2[o2.length - 1]]
                    var tdTextNode = document.createTextNode(result.toFixed(2))
                    tData.appendChild(tdTextNode); tRow.appendChild(td); tbody.appendChild(tr) ;                    
                }
                else{
                    var tdTextNode = document.createTextNode(storage[i][o2[ii]])
                    td.appendChild(tdTextNode); tr.appendChild(td); tbody.appendChild(tr);                    
                }
            }
        }
    }
}