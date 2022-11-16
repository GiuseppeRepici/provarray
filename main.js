const array = ["fdbDDfbdfb","dRRdbdf","efAAAbefb"];

const nuovoArray = array.map(function(elementi){
    let nuovoArray=elementi.toLowerCase().split("");
    nuovoArray[0]=nuovoArray[0].toUpperCase();
    return nuovoArray.join("");
   
})

console.log(nuovoArray);