import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Context from 'store'

export default () => {
  const { user } = useContext(Context)
  const history = useHistory()

  const goToUser = () => {
    history.push('/user')
  }

  const goToLogin = () => {
    history.push('/login')
  }

  return (
    <section>
      <h2>Home page</h2>
      <section>
        {!user && <button onClick={goToLogin}>To login page</button>}
        {user && <button onClick={goToUser}>To user page</button>}
      </section>
    </section>
  )
}