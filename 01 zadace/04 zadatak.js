let y =60;
let sat;
let min;
function uSate(number){
    min = number%60;
    sat = (number-min)/60;
    console.log(sat+"h "+min+"min");
}
uSate(y);
