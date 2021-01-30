"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');







const UserSchema = new (0, _mongoose.Schema)({
  name: String,
  username: String,
  email: String
}, {
  timestamps: false, // Adiciona ou remove os campos: updated_at, created_at
  versionKey: false // Adiciona ou remove o campo de chave da versão
})

exports. default = _mongoose.model('User', UserSchema)
