import { Request, Response } from 'express'
import User from '../schemas/User'

class UserController {
  public async getAll (req: Request, res: Response): Promise<Response> {
    const users = await User.find() // Busca todos usuários
    return res.json(users)
  }

  public async getById (req: Request, res: Response): Promise<Response> {
    const userById = await User.find({ _id: req.params.id }) // Get com o id passado no param
    return res.json(userById)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await User.create(req.body) // Create com os dados do body
    return res.json(user)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const userDeleted = await User.remove({ _id: req.params.id }) // Delete com o id passado no param
    return res.json(userDeleted)
  }

  public async notFound (req: Request, res: Response) {
    res.status(404).write('<h1 style="font-family: verdana; font-size: 20 ">Prova Backend <strong style="color: green;">Helpper</strong></h1>')
    res.end()
  }
}

export default new UserController()
