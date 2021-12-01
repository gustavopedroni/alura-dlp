import { UrlType } from '@src/@types'
import InvalidUrl from '@src/errors/invalidUrl'

export function getUrlType(pathname: string): string {
  if (pathname.includes(UrlType.FORMATION)) {
    return UrlType.FORMATION
  }

  throw new InvalidUrl(
    'O link precisa apontar para algum vídeo, lição, curso ou formação'
  )
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
