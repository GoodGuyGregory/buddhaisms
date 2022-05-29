const express = require('express');


let port = 6061;

let app = express();

app.use('/', routes);

app.listen(port, () => {
    console.log('guiding you through the way on http://%s', port);
});