let prim = "web apps vjezbe";
function primiString(str){
    let stringArray = str.split(" ");
    let rez="";
    let len = stringArray.length;
    for(let i=0; i  < len; i++){
        rez+=stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
    }
    console.log(rez);
}
primiString(prim);