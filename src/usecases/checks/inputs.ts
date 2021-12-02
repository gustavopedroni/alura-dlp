import InvalidInput from '@src/errors/invalidInput'
import { Options } from '@src/index'
import { validatePassword, validateUser, validateUrl } from '@src/validators'

export default function checkInputsUseCase(
  url: string,
  { user, password }: Options
) {
  if (!validateUrl(url)) {
    throw new InvalidInput('Precisa ser um link válido')
  }

  if (!validateUser(user)) {
    throw new InvalidInput('Usuário é do tipo e-mail')
  }

  if (!validatePassword(password)) {
    throw new InvalidInput('Senha deve ser no mínimo 5 caracteres')
  }
}
