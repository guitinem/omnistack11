const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

/**
 * Cors rule
 */
app.use(cors());

/**
 * Convert as request para o formato json
 */
app.use(express.json());

/**
 * Utiliza as rotas do arquivo routes.js
 */
app.use(routes);



app.listen(3333);