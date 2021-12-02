export const URLType = {
  FORMATION: 'FORMATION',
  COURSE: 'COURSE',
  LESSION: 'LESSION',
  VIDEO: 'VIDEO'
} as const

export const URLHumanType = {
  FORMATION: 'Formação',
  COURSE: 'Curso',
  LESSION: 'Aula',
  VIDEO: 'Vídeo'
}

export type KeyURLType = keyof typeof URLType
