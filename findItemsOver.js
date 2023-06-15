function findItemsOver(listOfObjects, threshold){
    var myArray=[];
    for(let i of listOfObjects){
      if(i['qty']>threshold){
        myArray.push(i);}
    }
    return myArray
  }
  
  