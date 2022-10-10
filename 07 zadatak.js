let z =23; 
let rezultat=1;	
function visekratnik(j)
{
    if(j>0 && j<1000){
        console.log("broj "+j+" je unutar [0,1000]");  
        for(let i=7;i<j;i++){
            if(i%7==0){
                rezultat*=i;          
            }   
        }
        console.log("rezultat: " + rezultat);
    }
    else{
        console.log("broj "+x+" nije unutar [0,1000], ne racuna se visekratnik na tom broju ");
    }

}
visekratnik(z);
