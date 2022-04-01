import express from 'express'
import controller from '../controllers/hashtags'

const routes = express.Router()

routes.get('/hashtags', controller.getAllTags)

export = routes
