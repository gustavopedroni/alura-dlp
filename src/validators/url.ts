import InvalidUrl from '@src/errors/invalidUrl'
import { UrlType } from '@src/@types'

export function getUrlType(pathname: string): string {
  if (pathname.includes(UrlType.FORMACAO)) {
    return UrlType.FORMACAO
  }

  throw new InvalidUrl('')
}

export default function validateUrl(link: string) {
  try {
    const url = new URL(link)

    return (
      url.origin === 'https://cursos.alura.com.br' &&
      url.pathname !== '/loginForm'
    )
  } catch (err) {
    return false
  }
}
