// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, validator } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {

  public async index () {
    // var users = [{ id: 1, username: 'virk' }]
    return view.render('welcome')
  }

  public async store ({ request }: HttpContextContract) {

    var user = new User()
    user.name = 'virk'
    user.email = 'virk@adonisjs.com'
    user.password = '12345'

    await user.save()

    return request
    // console.log(user.$isPersisted) // true
  }
  // public async store ({ request }: HttpContextContract) {
  //   const userSchema = schema.create({
  //     title: schema.string(),
  //     body: schema.string(),
  //   })

  //   const data = await request.validate({
  //     schema: userSchema,
  //     cacheKey: request.url(),
  //   })

  //   console.log(data)
  //   return 'Post created'
  // }
}
