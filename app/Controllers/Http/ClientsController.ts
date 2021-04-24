import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from "App/Models/Client";

export default class ClientsController {
  public async index ({view}: HttpContextContract) {

    const clients = await Client.all()
    return view.render('clients/index',{clients})
  }

  public async create ({view}: HttpContextContract) {
    return view.render('clients/create')
    // return response.send(view.render('clients.create'))
  }

  public async store ({request, response}: HttpContextContract) {
    const body =request.all()
    const client = await new Client()
    client.name = body.name
    client.surname = body.surname
    client.phone = body.phone

    client.save()
    // return view.render('clients.index')
    // return response.route('ClientsController.index')
    return response.redirect('/clients')
  }

  public async show ({view, request}: HttpContextContract) {
    const params = request.params()
    const client = await Client.find(params.id)
    return view.render('clients.show', {client})
  }

  public async edit ({view}: HttpContextContract,{id}) {
    const client = await Client.find(id)
    return view.render('clients.edit', {client})
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
