"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _User = require('../schemas/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
   async getAll (req, res) {
    const users = await _User2.default.find() // Busca todos usuários
    return res.json(users)
  }

   async getById (req, res) {
    const userById = await _User2.default.find({ _id: req.params.id }) // Get com o id passado no param
    return res.json(userById)
  }

   async create (req, res) {
    const user = await _User2.default.create(req.body) // Create com os dados do body
    return res.json(user)
  }

   async delete (req, res) {
    const userDeleted = await _User2.default.remove({ _id: req.params.id }) // Delete com o id passado no param
    return res.json(userDeleted)
  }

   async notFound (req, res) {
    res.status(404).write('<h1 style="font-family: verdana; font-size: 20 ">Prova Backend <strong style="color: green;">Helpper</strong></h1>')
    res.end()
  }
}

exports. default = new UserController()
