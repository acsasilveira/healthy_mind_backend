import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Meta from '../../Models/Meta'

export default class MetasController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const {data, descricao} = request.all();
    const metinha = await Meta.create({data, descricao});
    return metinha;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({params}: HttpContextContract) {
    const metazinha = await Meta.findOrFail(params.id)
      await metazinha.delete()
      return metazinha
  }
}
