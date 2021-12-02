#!/usr/bin/env node

import { Command } from 'commander'

import downloadUseCase from '@src/usecases/download'
import { commandHandler } from '@src/utils/handlers'

import { version } from '../package.json'

const program = new Command()

export interface Options {
  user: string
  password: string
  extractText?: boolean
}

program
  .argument('<url>', 'link to download')
  .requiredOption('-u, --user <example@email.com>', 'User to login on alura')
  .requiredOption(
    '-p, --password <example@password>',
    'Password to login on alura'
  )
  .option('-e, --extract-text', 'Extract text from books')
  .description('Pass the url to download')
  .version(version)
  .action(commandHandler((args, opts) => downloadUseCase(args, opts)))

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
