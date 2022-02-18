var n=document.getElementById("txt");  
 $('#btnId').click(function() {  
 var res="Welcome "+n.value+"!";  
 var ele="\""+res+"\"";  
 document.getElementById("address").innerHTML=ele;  
 }); 