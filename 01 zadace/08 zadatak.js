let p1= [3,4,5,6];
function reverse1(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--)
        res.push(arr[i]);

      console.log(...res);       
  }
  reverse1(p1);
  //ili 
function reverse(poljeDaj){
    let k=0;
    let temp;
    let l =poljeDaj.length -1;
    while(k<l){
        temp=poljeDaj[k];
        poljeDaj[k] =poljeDaj[l];
        poljeDaj[l]=temp;
        k++;l--;
    }
    console.log(...poljeDaj);
    }
    reverse(p1);