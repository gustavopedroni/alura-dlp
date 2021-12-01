import { Options } from '@src/@types'
import { info } from '@src/messages'
import validateInputs from '@src/usecases/validateInputs'
import validateReq from '@src/usecases/validateReq'
import { getUrlType } from '@src/validators/url'

export default async function downloadUseCase(url: string, options: Options) {
  await validateReq()
  validateInputs(url, options)

  const urlType = getUrlType(url)

  info(`Identificado tipo de download: ${urlType}`)
}
