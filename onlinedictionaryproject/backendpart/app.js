const express = require('express');
const cors = require('cors');
const entries = require("./dictionary-model.js");

const app = express();
const port = 3000;
const urlencodedParser = express.urlencoded({ extended: false })
app.use(cors({
    origin: '*'
}));
app.get('/', urlencodedParser, function(req,res){
    entries.findByWord(req.query.keyword, (err, data) => {
        if (err) {
            res.send([]);
        } 
        else res.send(data);
      });
});

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
});