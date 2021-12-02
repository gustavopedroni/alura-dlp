import chalk from 'chalk'

import { Options } from '@src/index'
import checkInputsUseCase from '@src/usecases/checks/inputs'
import checkRequerimentsUseCase from '@src/usecases/checks/requeriments'
import { getUrlHumanType } from '@src/usecases/url'
import { info } from '@src/utils/logger'

export default async function downloadUseCase(url: string, options: Options) {
  await checkRequerimentsUseCase()
  checkInputsUseCase(url, options)

  const urlType = getUrlHumanType(url)

  info(`Encontrado url do tipo: ${chalk.bold.cyanBright(urlType)}`)
}
