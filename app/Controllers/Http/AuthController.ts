import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from '../../Validators/UserValidator'

export default class AuthController {

    public async register({request}:HttpContextContract){
        const data = await request.validate(UserValidator)
        const userDb = await User.create(data)
        return userDb
    }

    public async login({request, auth, response}:HttpContextContract){
        
        try {
            const {email, password} = request.all()
            console.log({email, password})
            const token = await auth.use('api').attempt(email, password, {
                expiresIn: '1day'
            })
            const user = await User.findByOrFail("email", email)
            return {token, user}
         } catch (error) {
            response.status(401).send("Meu bem, seu login ou senha estão incorretos...")
         } 
         
    }
}

