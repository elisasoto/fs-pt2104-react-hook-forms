export const toLocalStorage = token => {
  localStorage.setItem('token', token)
}

export const fromLocalStorage = () => {
  return localStorage.getItem('token')
}