const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * Ong Routes
 */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(12),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);
routes.get('/ongs', OngController.index);

/**
 * Incidents Routes
 */
routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().positive()
    }),
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    })
}),IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);
routes.get('/incidents', celebrate({
    [Segments.QUERY]: {
        page: Joi.number().positive()
    }
}), IncidentController.index);

/**
 * Profile Routes
 */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}),ProfileController.list_incident);

/**
 * Session routes
 */
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object({
        id: Joi.string().required()
    })
}), SessionController.create);

module.exports = routes;