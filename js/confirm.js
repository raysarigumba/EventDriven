var i1 = document.getElementById('i1')
var i2 = document.getElementById('i2')
var i3 = document.getElementById('i3')
var i4 = document.getElementById('i4')
var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var q1 = document.getElementById('q1')
var q2 = document.getElementById('q2')
var q3 = document.getElementById('q3')
var q4 = document.getElementById('q4')
var st1 = document.getElementById('st1')
var st2 = document.getElementById('st2')
var st3 = document.getElementById('st3')
var st4 = document.getElementById('st4')
var nCustomer = document.getElementById('nCustomer')
var oNumber = document.getElementById('oNumber')
var cName = document.getElementById('cName')
var save = document.getElementById('save')
var iList = [i1, i2, i3, i4]
var x = [oNumber,cName,i1,i2,i3,i4,p1,p2,p3,p4,q1,q2,q3,q4,st1,st2,st3,st4]
nCustomer.addEventListener('show.bs.modal', function(){
    for(var i = 0; i < x.length; i++){
        x[i].value = ''
        if (i >= 2){
            x[i].disabled = true
        }
    }
    
})

const request = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
var response
fetch (request)
.then((res) => {
    let conversion = res.json()
    conversion
    .then((data) => {      
        response = data
        for (var i = 0; i < iList.length; i++){
            for (var ii = 0; ii < data['meals'].length; ii++){
                var opt = document.createElement("option")
                var optNode = document.createTextNode(data['meals'][ii]['strMeal'])
                opt.value = data['meals'][ii]['strMeal']
                opt.appendChild(optNode)
                iList[i].appendChild(opt)
            }
        }
    })
    .catch((err) =>{
        console.log(err) 
    })
})
.catch((err) =>{
    console.log(err)
})


nCustomer.addEventListener('change', function(){
    if(oNumber.value != '' && cName.value != ''){
        i1.disabled = false
    }
    else{
        i1.disabled = true
    }
})
oNumber.addEventListener('change', function(){
    var storage = JSON.parse(localStorage.getItem('customers'))
    if(storage != null){
        for(var i = 0; i < storage.length; i++){
            if(oNumber.value == data[i]['oNumber']){
                oNumber.value = ''; break;
            }
        }
    }
})
cName.addEventListener('change', function(){ //cName VALIDATOR
    if(cName.value.search(' ') != -1 && cName.value.split(' ').length == 2 && (isNaN(cName.value.split(' ')[0]) && isNaN(cName.value.split(' ')[1]))){
        var bool = true
        var cNameArray = cName.value.split(' ')
        var fNameArray = cNameArray[0].split('')
        var lNameArray = cNameArray[1].split('')       
        for(var i = 0; i < fNameArray.length; i++){
            if(!((fNameArray[i] >= "a" && fNameArray[i] <= "z") || (fNameArray[i] >= "A" && fNameArray[i] <= "Z"))){
                cName.value = '';
                bool = false; break;
            }
        }
        if(bool){
            for(var i = 0; i < lNameArray.length; i++){
                if(!((lNameArray[i] >= "a" && lNameArray[i] <= "z") || (lNameArray[i] >= "A" && lNameArray[i] <= "Z"))){
                    cName.value = ''; checker = false; break;
                }
            }
            if(bool){
                i1.disabled = false   
            }
            else{
                i1.disabled = true   
            }               
        }
        else{
            cName.value = ''
        }              
           
    }
    else{
        i1.disabled = true
        cName.value = ''
    }
    
})

i1.addEventListener('change', function(){ //ITEM1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER ITEMS)
        p1.value = ''; q1.value = ''; st1.value = ''; p1.disabled = false; q1.disabled = false;
        
        i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true;  q4.disabled = true;
})
p1.addEventListener('change', function(){ // p1 VALIDATOR (REFER VARIABLE NAMING FOR OTHER PRICES)
    if(isNaN(p1.value)){

        p1.value = ''; st1.value = ''; save.disabled = true;

        i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(p1.value <= '0'){
            st1.value = ''; q1.value = ''; save.disabled = true;

            i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;
    
            i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
        }
        else{
            if(q1.value <= "0" || q1.value == ''){
                st1.value = '';
                save.disabled = true;
    
                i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;
        
                i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; i4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p1.value) * parseInt(q1.value);
                st1.value = tot.toFixed(2);
                save.disabled = false; i2.disabled = false; p2.disabled = false; q2.disabled = false;         
            }            
        }
    }
})
q1.addEventListener('change', function(){// QTY VALIDATOR (REFER VARIABLE NAMING FOR OTHER QTYS)
    if(p1.value <= '0'){
        q1.value = ''; st1.value = ''; save.disabled = true;

        i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(q1.value <= '0'){
            q1.value = ''; st1.value = ''; save.disabled = true;
    
            i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;

            i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;         
        }
        else{
            if(p1.value <= "0" || p1.value == ''){
                st1.value = ''; save.disabled = true;
    
                i2.value = ''; p2.value = ''; q2.value = ''; st2.value = ''; i2.disabled = true; p2.disabled = true; q2.disabled = true;
        
                i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p1.value) * parseInt(q1.value)
                st1.value = tot.toFixed(2)
                save.disabled = false; i2.disabled = false; p2.disabled = false; q2.disabled = false ;           
            }     
        }
    }
    
})
i2.addEventListener('change', function(){
        p2.value = ''; q2.value = ''; st2.value = ''; p2.disabled = false; q2.disabled = false; save.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
})
p2.addEventListener('change', function(){
    if(isNaN(p2.value)){
        p2.value = ''; st2.value = ''; save.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(p2.value <= '0'){
            st2.value = ''; q2.value = ''; save.disabled = true;
    
            i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
        }
        else{
            if(q2.value <= "0" || q2.value == ''){
                st2.value = ''; save.disabled = true;
        
                i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p2.value) * parseInt(q2.value)
                st2.value = tot.toFixed(2)
                save.disabled = false; i3.disabled = false; p3.disabled = false; q3.disabled = false;        
            }            
        }
    }
})
q2.addEventListener('change', function(){
    if(p2.value <= '0'){
        q2.value = ''; st2.value = ''; save.disabled = true;

        i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(q2.value <= '0'){
            q2.value = ''; st2.value = ''; save.disabled = true;
        
            i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true  ;       
        }
        else{
            if(p2.value <= "0" || p2.value == ''){
                st2.value = ''; save.disabled = true;
        
                i3.value = ''; p3.value = ''; q3.value = ''; st3.value = ''; i3.disabled = true; p3.disabled = true; q3.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p2.value) * parseInt(q2.value)
                st2.value = tot.toFixed(2)
                save.disabled = false; i3.disabled = false; p3.disabled = false; q3.disabled = false ;           
            }     
        }
    }
    
})
i3.addEventListener('change', function(){
        p3.value = ''; q3.value = ''; st3.value = ''; p3.disabled = false; q3.disabled = false; save.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = '';  st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
})
p3.addEventListener('change', function(){
    if(isNaN(p3.value)){
        p3.value = ''; st3.value = ''; save.disabled = true;
            
        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(p3.value <= '0'){
            st3.value = ''; q3.value = ''; save.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
        }
        else{
            if(q3.value <= "0" || q3.value == ''){
                st3.value = ''; save.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p3.value) * parseInt(q3.value)
                st3.value = tot.toFixed(2)
                save.disabled = false; i4.disabled = false; p4.disabled = false; q4.disabled = false ;           
            }            
        }
    }
})
q3.addEventListener('change', function(){
    if(p3.value <= '0'){
        q3.value = ''; st3.value = ''; save.disabled = true;

        i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true;
    }
    else{
        if(q3.value <= '0'){
            q3.value = ''; st3.value = ''; save.disabled = true;
    
            i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;        
        }
        else{
            if(p3.value <= "0" || p3.value == ''){
                st3.value = ''; save.disabled = true;
        
                i4.value = ''; p4.value = ''; q4.value = ''; st4.value = ''; i4.disabled = true; p4.disabled = true; q4.disabled = true ;
            }
            else{
                var tot = parseFloat(p3.value) * parseInt(q3.value)
                st3.value = tot.toFixed(2)
                save.disabled = false; i4.disabled = false; p4.disabled = false; q4.disabled = false;           
            }     
        }
    }
    
})
i4.addEventListener('change', function(){
        p4.value = ''; q4.value = ''; st4.value = ''; p4.disabled = false; q4.disabled = false; save.disabled = true;
})
p4.addEventListener('change', function(){
    if(isNaN(p4.value)){
        p4.value = ''; st4.value = ''; save.disabled = true;
    }
    else{
        if(p4.value <= '0'){
            st4.value = ''; q4.value = ''; save.disabled = true;
        }
        else{
            if(q4.value <= "0" || q4.value == ''){
                st4.value = ''; save.disabled = true;
            }
            else{
                var tot = parseFloat(p4.value) * parseInt(q4.value)
                st4.value = tot.toFixed(2)
                save.disabled = false ;         
            }            
        }
    }
})
q4.addEventListener('change', function(){
    if(p4.value <= '0'){
        q4.value = ''; st4.value = ''; save.disabled = true;
    }
    else{
        if(q4.value <= '0'){
            q4.value = ''; st4.value = ''; save.disabled = true;    
        }
        else{
            if(p4.value <= "0" || p4.value == ''){
                st4.value = ''; save.disabled = true;
            }
            else{
                var tot = parseFloat(p4.value) * parseInt(q4.value)
                st4.value = tot.toFixed(2)
                save.disabled = false ;         
            }     
        }
    }
    
})