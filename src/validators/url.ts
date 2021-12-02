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
