import Warning from '@src/errors/warning'
import { error, warning } from '@src/utils/logger'

function actionErrorHanlder(err: Error) {
  if (err instanceof Warning) {
    warning(err.message)
  } else {
    error(err.message)
  }
}

export function commandHandler(fn: (...args: any[]) => Promise<any>) {
  return (...args: any[]) => fn(...args).catch(actionErrorHanlder)
}
