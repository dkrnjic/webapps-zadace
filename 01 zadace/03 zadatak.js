let x = 115; 
let result;
function isIt()
{			
    if(x>100&&x<15000){
         result= "broj "+x+" je unutar [100,150000]";  
    }
    else{
         result="broj "+x+" nije unutar [100,150000]";
    }
    console.log(result);  
}
isIt();