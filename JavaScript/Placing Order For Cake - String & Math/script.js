function OrderCake(str) {
    
    var n = str.length;
    var weight=str[0]+str[1]+str[2]+str[3];
    var ordernumber=str[n-3]+str[n-2]+str[n-1];
    var cakename=str.substring(4,n-3)
    var price=""
    price+=Math.round((weight/1000)*450);
    
    var ans="Your order for "+Math.round(weight/1000)+" kg "+cakename+" cake has been taken. You are requested to pay Rs. "+price+" on the order no "+ordernumber;
	return ans;//fill the code
}