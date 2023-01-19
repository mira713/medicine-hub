import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const usenavigate = useNavigate()

  const [displayusername, displayusernameupdate] = useState('')
  useEffect(() => {
    let username = sessionStorage.getItem('username')
    if (username === '' || username === null) {
      usenavigate('/login')
    } else {
      displayusernameupdate(username)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="header">
        <Link to={'/'}>Admin Panel</Link>
        <span style={{ marginLeft: '80%' }}>
          Welcome <b>{displayusername}</b>
        </span>
        <Link style={{ float: 'right' }} to={'/login'}>
          Logout
        </Link>
      </div>
      <h1 className="text-center">Welcome to Admin Dashboard Panel</h1>
    </div>
  )
}

export default Home
