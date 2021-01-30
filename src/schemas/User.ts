import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
    name?: string,
    username?: string,
    email?: string,
}

const UserSchema = new Schema({
  name: String,
  username: String,
  email: String
}, {
  timestamps: false, // Adiciona ou remove os campos: updated_at, created_at
  versionKey: false // Adiciona ou remove o campo de chave da versão
})

export default model<UserInterface>('User', UserSchema)
