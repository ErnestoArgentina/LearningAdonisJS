import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

  /**
   * // Registar o usuario
   */
  public async register ({ request }: HttpContextContract) {
    // return request
    /**
     * Validate user details
     */
    const validationSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email(),
        rules.unique({ table: 'users', column: 'email' }),
      ]),
      password: schema.string({ trim: true }, [
        rules.confirmed(),
      ]),
      name: schema.string.optional()
    })

    const userDetails = await request.validate({
      schema: validationSchema,
    })

    /**
     * Create a new user
     */
    const user = new User()
    user.email = userDetails.email
    user.password = userDetails.password
    await user.save()

    return 'Your account has been created'
  }

  /**
   * // logging in user
   */
  public async login ({ auth, request }) {
    // return auth.user.id;
    const { email, password } = request.all()
    var user = User.findBy('email', email)
    if(user){
      return user
      return "Logged in"
    }else
    // await auth.attempt(email, password)

    return 'Logged in successfully'
  }
}
