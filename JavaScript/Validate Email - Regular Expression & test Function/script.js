function validateEmail(email) {
 //fill the code
 var reg = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
if (reg.test(email)){
return "Valid email address!";

}
else{
return "Invalid email address!";
}
}