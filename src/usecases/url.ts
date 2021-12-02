import { remove } from 'remove-accents'

import { URLHumanType, URLType, KeyURLType } from '@src/contants/url'
import InvalidUrl from '@src/errors/invalidUrl'

export function getHumanType(type: KeyURLType) {
  return URLHumanType[type]
}

export function getKey(type: KeyURLType) {
  return remove(URLHumanType[type].toLocaleLowerCase())
}

export function getUrlHumanType(url: string) {
  const type = getUrlType(url)
  return getHumanType(type)
}

export function getUrlType(url: string): KeyURLType {
  const { pathname } = new URL(url)

  if (pathname.includes(getKey(URLType.FORMATION))) {
    return URLType.FORMATION
  }

  throw new InvalidUrl(
    `O link precisa apontar para algum ${getHumanType(
      URLType.VIDEO
    )}, ${getHumanType(URLType.LESSION)}, ${getHumanType(
      URLType.COURSE
    )} ou ${getHumanType(URLType.FORMATION)}`
  )
}
