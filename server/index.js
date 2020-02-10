const express = require('express');
const path = require('path');

// Initialize server and port
const app = express();
const port = 3000;

// Serve static html file
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// Set server to listen at given port
app.listen(port, () => console.log(`Moving Analytics UI Engineer Project listening on port ${port}`));