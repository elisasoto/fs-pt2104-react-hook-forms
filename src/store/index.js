import { createContext, useState, useEffect } from 'react'
import { auth } from 'services'
import { toLocalStorage, fromLocalStorage } from 'utils'

const Context = createContext(null)

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = fromLocalStorage()
    getUser(token)
  }, [])

  const getUser = token => {
    auth.user({ token })
      .then(result => {
        result && setUser(result.user)
      })
      .finally(() => {
        setLoading(false)
        // Trozo de código para comprobar que loading aparece durante la petición
        // setTimeout(() => {
        //   setLoading(false)
        // }, 1500)
      })
  }

  const login = async ({ email, password }) => {
    const result = await auth.login({ email, password })
    if (result) {
      toLocalStorage(result.accessToken)
      getUser(result.accessToken)
    }
  }

  return { user, login, loading }
}

export const ContextProvider = ({ children }) => {
  const contextData = useAuth()

  return (
    <Context.Provider value={contextData}>
      {children}
    </Context.Provider>
  )
}

export default Context