var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
 
app.use(fileUpload());

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});
 
app.post('/upload', function(req,res){
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
    var sampleFile = req.files.sampleFile;
    name = (+new Date) + sampleFile.name;
    sampleFile.mv(__dirname + '/' + name, function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
});

app.listen(8000,function() {
    console.log("Magic happening @ localhost:8000");
});