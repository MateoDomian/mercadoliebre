const express = require('express');
const app = express();
const path = require('path');
const port = 3030
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.resolve('./views/home.html'));
});

app.listen(process.env.PORT || port, () => console.log ('servidor en puerto 3030'))