module.exports = function getZerosCount(number, base) {
    let num, prime, exponent=1, divider=2, i=0, length;
    let divArr=[], prmsExpsArr=[];
    let MainPrmExp;//MostFrequentlyUsedPrime to get zeros in current base
    //// dividers of the base////////
    let Temp=base;
    while(Temp>=2){
        if(Temp%divider===0){
           Temp/=divider;
            divArr[i]=divider;
            i++;
        } else{
            divider++;
        }
        }        
       ///////////////////////
       do{
           length=divArr.length;
            if(divArr[length-2]===divArr[length-1]){
                exponent++;
                divArr.pop();
            } else {
                prime=divArr.pop();
                prmsExpsArr.push([prime, exponent]);
                exponent=1;
            }
        }while(divArr.length>=1);
		////////////
function getZerosCount(number, PrmExp){
    let count=0;
    let prime=PrmExp[0];
    let exponent=PrmExp[1];    
    while(number>1){
    count+=Math.floor(number/prime);
    number=Math.floor(number/prime);
    }
    return Math.floor(count/exponent);
}
length=prmsExpsArr.length;
let result=[];
for(let i=0; i<length;i++){
    result[i]=getZerosCount(number, prmsExpsArr[i]);
}
result.sort((a, b)=> a-b);
return result[0];
}