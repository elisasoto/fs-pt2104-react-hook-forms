import { Redirect } from 'react-router-dom'
import { useContext } from 'react'
import Context from 'store'

export default () => {
  const { user, loading } = useContext(Context)

  if (loading) {
    return <h2>Loading...</h2>
  }

  return !user ?
    <Redirect to='/login' /> :
    <section>
      <h2>User page</h2>
      <p>Username: {user.username}</p>
    </section>
}