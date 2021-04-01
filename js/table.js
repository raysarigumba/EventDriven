var dTable = document.getElementById('dTable')
var tbody = dTable.firstElementChild //NEEDED TO DISPLAY CONTENT
var object1 = null; var object2 = null;

if(storage != null){
    for(var i = 0; i < storage.length; i++){
        object1 = storage[i]; 
        object2 = Object.getOwnPropertyNames(object1); //['ORNumber', 'name', 'items', 'total']
        var tRow = document.createElement('tr'); var bool = true
        for(var ii = 0; ii < object2.length; ii++){
            var tData = document.createElement('td');
            tData.scope = 'row'; 
            if(ii == 0 && bool){
                var tdTextNode = document.createTextNode(i + 1)
                tData.appendChild(tdTextNode);tRow.appendChild(tData);tbody.appendChild(tRow);
                ii--; bool = false;
            }
            else{
                tData.className = 'text-center'
                if(ii == object2.length - 1){
                    var btn = document.createElement("BUTTON");
                    btn.setAttribute('data-bs-target', '#viewItem'); btn.innerHTML = "View"; btn.className = "btn btn-secondary mb-2"; 
                    btn.id = "viewOrder";              
                    document.body.appendChild(btn);
                    btn.setAttribute('data-bs-toggle', 'modal');
                    tData.appendChild(btn); tRow.appendChild(tData); tbody.appendChild(tRow);
                }
                else if(ii == object2.length - 2){
                    var result = storage[i][object2[object2.length - 1]];
                    var tdTextNode = document.createTextNode(result.toFixed(2));
                    tData.appendChild(tdTextNode); tRow.appendChild(tData); tbody.appendChild(tRow) ;                    
                }
                else{
                    var tdTextNode = document.createTextNode(storage[i][object2[ii]]);
                    tData.appendChild(tdTextNode); tRow.appendChild(tData); tbody.appendChild(tRow);                    
                }
            }
        }
    }
}