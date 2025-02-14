const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');
const routerAuth = require('./routes/auth')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Welcome to the API!',
    version: '1.0.0',
  });
});

app.use('/api', router);
app.use('/auth',routerAuth)

app.get('/uploads/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'uploads', req.params.filename));
});


app.use((req, res) => {
  res.status(404).send({
    success: false,
    message: 'Route not found',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
