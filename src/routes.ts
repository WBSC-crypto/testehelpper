import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.getAll)
routes.get('/users/:id', UserController.getById)
routes.post('/users', UserController.create)
routes.delete('/users/:id', UserController.delete)
routes.get('*', UserController.notFound)

export default routes
