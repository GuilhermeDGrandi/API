
import User from '../models/User'
import jwt from 'jsonwebtoken'


class TokenController{

  async create(req,res){
    const {email = '', password = ''} = req.body
    console.log(email, password)
    if(!email || !password){
      
      return res.status(401).json({
        errors: ['Credenciais inválidas']
      })
    }
    const user = await User.findOne({where: {email} } )
    if(!user){
      return res.status(401).json({
        errors: ['Usuário não existe']
      })
    }
  
    if(!(await user.passwordIsValid(password))){
      console.log(password)
      return res.status(401).json({
        
        errors: ['Senha inválida']
      })
    }
    const {id} = user
    const token = jwt.sign({id, email}, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })
    return res.json({token, user: {nome: user.nome, id, email}})
  }
}

export default new TokenController();