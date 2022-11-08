const express = require("express");
const app = express();
const PORT = 8081;
const { uuid } = require('uuidv4');
/* import {v4 as uuidv4} from "uuid" */


app.use(express.json());

let tempStorage= [
    {
	"naziv": "Test",
	"djela": "Lorem ipsum",
    "id": "12345",
    "datum": "Tue Nov 08 2022 02:05:26 GMT+0100 (Central European Standard Time)"
    }
    
];

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server slusa "+ PORT);
    else 
        console.log("error ne moze se spojit na port i error je", error);
})



app.delete("/izbrisiDjeloAutora", (req,res)=>{ //delete ne radi neda mi se a i vec je kasno, treba se ustat za koji sat
    let { djela } = req.params;
    tempStorage = tempStorage.filter(x=> x.djela == djela)
    res.send(tempStorage);
})


app.post('/dodajAutora', (req, res) => {
    let data = req.body;
    let { naziv } = req.body;
    let { djela } = req.body;
    if(naziv=== undefined || djela === undefined){
        res.json({"Error":"Krivi kljucevi"})
    }
    else{
        let count = djela.split('').length;
        if(count>20){
            res.json({'Error':'Djelo '+ naziv +' ima vise od 20 znakova'})   
        }
        else{
            data.id = uuid();
            data.datum = new Date();
            tempStorage.push(data);
            res.send(tempStorage);
        }
       
    }
 })

 
app.get('/vratiAutore', (req, res)=>{
    res.status(200);
        let temp=[];
        tempStorage.forEach(function(item, index){
        temp.push(item.naziv+", "+item.djela);         
        })
       
    res.send(temp); 
});



  