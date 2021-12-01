export default function validateUser(user: string) {
  const re = /\S+@\S+\.\S+/
  return re.test(user)
}
