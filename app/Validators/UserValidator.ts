import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string({}, [
      rules.required()
    ]),
    telefone: schema.string(),
    genero: schema.string(),
    aniversario: schema.string(),
    email: schema.string({},[
      rules.required(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    password: schema.string({},[
      rules.required(),
      rules.minLength(6),
    ])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    required: "Acho que você não preencheu tudo, volta lá pra conferir o campo: {{field}}",
    'email.unique': "Esse email já foi cadastrado!",
    'minLength': "Meu amor, a senha está muito pequena... Isso é perigoso!!",
  }
}
