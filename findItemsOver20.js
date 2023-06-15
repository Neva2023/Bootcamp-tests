
function findItemsOver20(listOfObjects){
    var array = [];
    for(let i of listOfObjects){
      if(i.qty>20){
        array.push(i);}
    }
    return array;
  }