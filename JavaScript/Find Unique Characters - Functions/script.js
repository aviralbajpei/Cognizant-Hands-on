function modifyString(str)
{
 var x1=str.replace(/\s+/g, '');
 x1=x1.toLowerCase().toString();
 return x1;
//fill code here
}
function uniqueCharacters(str)
{
//fill code here
str1=modifyString(str);
 var result = "";
 var freq = {};
 for(i=0;i<str1.length;i++){
 var char = str1[i];
 if(freq[char]) {
 freq[char]++;
 } else {
 freq[char] =1
 result = result+char;
 }
 }
 return result;
}