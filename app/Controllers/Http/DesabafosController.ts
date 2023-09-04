import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Desabafo from '../../Models/Desabafo'

export default class DesabafosController {
 
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const {data, descricao} = request.all();
    const desabafinho = await Desabafo.create({data, descricao});
    return desabafinho;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
