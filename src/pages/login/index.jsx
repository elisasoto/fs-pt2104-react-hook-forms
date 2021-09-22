import Context from 'store'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'

const email = 'hola@hola.com'
const password = 'Hola1234'

export default () => {
  const { user, login } = useContext(Context)

  const handleClick = () => {
    login({ email, password })
  }

  return user ?
    <Redirect to='/home' /> :
    <section>
      <h2>Login page</h2>
      <section>
        <button onClick={handleClick}>Do login</button>
      </section>
    </section>
}