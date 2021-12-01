import type { Options } from '@src/@types/index'
import InvalidInput from '@src/errors/invalidInput'
import { validatePassword, validateUser, validateUrl } from '@src/validators'

export default function validateInputs(
  url: string,
  { user, password }: Options
) {
  if (!validateUrl(url)) {
    throw new InvalidInput(
      'O link precisa apontar para algum vídeo, lição, curso ou formação'
    )
  }

  if (!validateUser(user)) {
    throw new InvalidInput('E-mail must be a e-mail type')
  }

  if (!validatePassword(password)) {
    throw new InvalidInput('Pass must have at least 5 caracters')
  }
}
