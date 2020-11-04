const express = require('express');
const app = express();
const testRouter = require('./routes/test_route');



app.use('/test', testRouter);
app.listen(3000, () => console.log('listening...'));