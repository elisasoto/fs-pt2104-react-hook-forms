export const catcher = fn => async (...args) => {
  try {
    return (await fn(...args)).data
  } catch (error) {
    console.info('> error: ', error.message)
    return false
  }
}

export const setBearer = token => ({
  headers: {
    authorization: `Bearer ${token}`
  }
})