const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * Ong Routes
 */
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

/**
 * Incidents Routes
 */
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents', IncidentController.index);

/**
 * Profile Routes
 */
routes.get('/profile', ProfileController.list_incident);

/**
 * Session routes
 */
routes.post('/sessions', SessionController.create);

module.exports = routes;