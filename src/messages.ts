import chalk from 'chalk'
import emoji from 'node-emoji'

export const error = (msg: string) =>
  console.log(`${emoji.get('x')} ${chalk.bold.red('Error')}: ${chalk.red(msg)}`)

export const success = (msg: string) =>
  console.log(
    `${emoji.get('i_love_you_hand_sign')}  ${chalk.bold.green(
      'Success'
    )}: ${chalk.green(msg)}`
  )

export const warning = (msg: string) =>
  console.log(
    `${emoji.get('warning')}  ${chalk.bold.yellowBright(
      'Warning'
    )}: ${chalk.yellow(msg)}`
  )

export const info = (msg: string) => console.log(`${chalk.cyanBright(msg)}`)
