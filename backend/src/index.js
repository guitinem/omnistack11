const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
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

/**
 * Retorna a  demonstração do erro
 */
app.use(errors());


app.listen(3333);