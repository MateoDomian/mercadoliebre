const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen(3030, () => console.log ('servidor en puerto 3030'))