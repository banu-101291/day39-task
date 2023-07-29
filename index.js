const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app=express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/createTimeStampFile', (req,res) =>{
    const currenttimestamp = new Date( ).toISOString();
    const content=currenttimestamp ;

    const filePath = 'path/to/file.json';

fs.writeFile(filePath,content, (err) => {
        if (err) {
            console.error(`Error saving file`, err);
            res.status(500).json({ error: `Failed to save file.` });
        }

        else {
            console.log(`File saved successfully`, filePath);
            res.status(201).json({ message: content });
        }
    });


});


app.listen(PORT,()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
});


