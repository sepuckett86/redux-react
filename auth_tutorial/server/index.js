// Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// DB setup
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:auth/auth', { useNewUrlParser: true });

// App setup
// Middleware
app.use(morgan('combined'));
// allows requests from anywhere with cors -- security risk
app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));
// Call our router
router(app);

// Server setup
// If there is a port, use that, but otherwise use 3090
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on:', port);
