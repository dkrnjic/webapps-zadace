const express = require("express");
const app = express();
const PORT = 8080;
const { uuid } = require('uuidv4');
/* import {v4 as uuidv4} from "uuid" */


app.use(express.json());

let tempStorage= [
    {
	"naziv": "Test",
	"sadrzaj": "Lorem ipsum",
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


app.patch("/izmjeniObavjest/:id", (req,res)=>{
    let { id } = req.params;
    let { sadrzaj } = req.body;
    let lookup = tempStorage.find((x)=>x.id == id);
    lookup.sadrzaj = sadrzaj;
    console.log(lookup);
    res.send(tempStorage);
})

/* app.delete("/deleteUser", (req,res)=>{
    let { id } = req.params;
    tempStorage = tempStorage.filter(x=> x.id == id)
    res.send(tempStorage);
})
 */

app.post('/dodajObavjest', (req, res) => {
    let data = req.body;
    let{name} = req.body;
    console.log(name);
    data.id = uuid();
    data.datum = new Date();
    console.log(data);
    tempStorage.push(data);
    res.send(tempStorage);
 })

 
app.get('/vratiObavjesti', (req, res)=>{
    res.status(200);
        let temp=[];
        tempStorage.forEach(function(item, index){
            temp.push(item.naziv+", "+item.datum);
        })
    res.send(temp); 
});

app.get('/vratiObavjest/:id', (req, res)=>{
    res.status(200);
    let { id } = req.params;
    let test = tempStorage.find((x)=>x.id == id);
    res.send(test); 
});


  