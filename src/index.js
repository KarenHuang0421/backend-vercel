const express = require('express');
const indexRouter = require('./routes/index');

const app = express();
app.use(express.json())

app.use('/', indexRouter);

const port = process.env.PORT || 9001;

app.listen(port, () => console.log(`Listing to port ${port}`))
