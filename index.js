const express = require('express');
const app = express();

app.get('/', (req, res) => {  // route handler watching for a very specific http method
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
