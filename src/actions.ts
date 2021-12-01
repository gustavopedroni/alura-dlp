import Warning from '@src/errors/warning'
import { error, warning } from '@src/messages'

function actionErrorHanlder(err: Error) {
  if (err instanceof Warning) {
    warning(err.message)
  } else {
    error(err.message)
  }
}

export function actionRunner(fn: (...args: any[]) => Promise<any>) {
  return (...args: any[]) => fn(...args).catch(actionErrorHanlder)
}
