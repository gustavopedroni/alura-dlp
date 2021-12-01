import { Options } from '@src/@types'
import { info } from '@src/messages'
import validateInputs from '@src/usecases/validateInputs'
import { getUrlType } from '@src/validators/url'

export default async function downloadUseCase(url: string, options: Options) {
  validateInputs(url, options)

  const urlType = getUrlType(url)

  info(`Identificado tipo de download: ${urlType}`)
}
