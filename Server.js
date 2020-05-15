var express = require('express');
var cors = require("cors");
var bodyparser = require('body-parser')
var fs = require('fs')
const PORT = "8080"
const app = express();

app.use(cors());
app.use(bodyparser())
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.options('*', cors());
app.use(express.json());

app.post('/readJsonFile', (request, response) => {
    let fileName = request.body.fileName;
    fs.readFile(fileName, (err, res) => {
        if (err) {
            console.log("file doesn't read", err)
        }
        console.log("file  read")
        response.send(res)
    })

})

app.listen(PORT, () => {
    console.log("App running on the port number" + PORT)
})