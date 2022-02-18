window.onload = function() {  
 if (window.jQuery) {  
 // jQuery is loaded  
 document.getElementById('msg').innerHTML = "jQuery is loaded!!!";  
 } else {  
 // jQuery is not loaded  
 document.getElementById('msg').innerHTML = "jQuery is not loaded!!!";  
 }  
}  