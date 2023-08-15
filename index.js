const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app=express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/create', (req,res) =>{
console.log("hiiii");
    try {
          
    let date = new Date() ;
    let currentTimeStamp = date.toUTCString().slice(0, -7);
    let splited = currentTimeStamp.split(" ");
    console.log(`spilt output:${splited}`)
    let content = `The current Time with date: ${currentTimeStamp}`
    console.log(content);


    fs.writeFileSync(path.join(__dirname, `/TimeStampFile/dateTime${splited.join()}.txt`), content)


    res.status(200).json({ status: 'success', message: "file created successfully" })

        
    } catch (error) {
        console.log(error);
        
    }

});


app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});


