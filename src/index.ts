#!/usr/bin/env node

import { Command } from 'commander'

import { actionRunner } from '@src/actions'
import downloadUseCase from '@src/usecases/download'

import { version } from '../package.json'

const program = new Command()

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
  .action(actionRunner((args, opts) => downloadUseCase(args, opts)))

program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
