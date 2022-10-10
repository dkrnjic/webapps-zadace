const object1 = {
    a: 'da2',
    b: 122,
    c: true
  };

const object2 = {
    a: 'kam',
    b: 42,
    c: false
  };

  function objDispenser(obj,obj2){
    let lenght = Object.keys(obj).length;
    if(lenght!=Object.keys(obj2).length)
    {
        console.log("false");
        return;
    }
    let arr=[];
    let arr2=[];
    let counter=0;
    while(counter<lenght){
        arr.push(Object.keys(obj)[counter]);
        counter++;
    }
    lenght = Object.keys(obj2).length;
    counter=0;
    while(counter<lenght){
        arr2.push(Object.keys(obj2)[counter]);
        counter++;
    }
    let d=0;
    for(let s=0;s<lenght;s++){
        if(arr[s] == arr2[d]){
        s=0;
        d++;
        }
        
    }
    if(lenght===d){
        console.log("true");
    }
    else{
        console.log("false");
    }

    
  }

  objDispenser(object1,object2);