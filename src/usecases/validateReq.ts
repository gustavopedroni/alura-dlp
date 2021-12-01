import chalk from 'chalk'
import { lookpath } from 'lookpath'
import emoji from 'node-emoji'

import { InstallFFMPeg } from '@src/errors/ffmpeg'

export default async function validateReq() {
  const ffmpeg = await lookpath('ffmpege')

  if (!ffmpeg) {
    throw new InstallFFMPeg(
      `A Biblioteca ${chalk.bold.red(
        'FFMPeg'
      )} deve estar instalada! \n${chalk.cyanBright(
        `${emoji.get(
          'smile_cat'
        )} Acesse: https://www.ffmpeg.org/download.html para saber como instalar.`
      )}`
    )
  }
}
