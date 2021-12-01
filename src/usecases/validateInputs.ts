import type { Options } from '@src/@types/index'
import InvalidInput from '@src/errors/invalidInput'
import { validatePassword, validateUser, validateUrl } from '@src/validators'

export default function validateInputs(
  url: string,
  { user, password }: Options
) {
  if (!validateUrl(url)) {
    throw new InvalidInput('O link precisa apontar para o domínio da alura')
  }

  if (!validateUser(user)) {
    throw new InvalidInput('Usuário é do tipo e-mail')
  }

  if (!validatePassword(password)) {
    throw new InvalidInput('Senha deve ser no mínimo 5 caracteres')
  }
}
