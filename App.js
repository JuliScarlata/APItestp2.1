const express = require('express');
const { sequelizeDB1, PersonaDB1, sequelizeDB2, PersonaDB2 } = require('./database');
const basicAuth = require('express-basic-auth');
const { authenticateUser } = require('./auth');
const Routes = require('./Routes');


const app = express();
app.use(express.json());

app.use(authenticateUser);


app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
