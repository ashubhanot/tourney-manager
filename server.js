const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
const cors = require('cors');


require('dotenv').config()
require('./config/database.js')

// app.use('/api/users', require('./routes/api/users'));
app.use(logger('dev'));
app.use(express.json());
app.use(cors())


// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
// app.use('/api/orders', require('./routes/api/orders.js'));
// this one is going to do double duty, serving both items and categories-related routes:
app.use('/api/users', require('./routes/api/users.js')); //maybe change /api/users?
// app.use('/api', require('./routes/api/items.js'));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});