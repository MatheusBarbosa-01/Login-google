import Nav from '../components/nav';
import { GoogleLogin, googleLogout, type CredentialResponse } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'
import styles from '../Home.module.css'

type User = {
  name: string
  email: string
  picture: string
}

function Home() {
const [user, setUser] = useState<User | null>(null)

 function login(credentialResponse: CredentialResponse) {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<User>(credentialResponse.credential)
      setUser(decoded)
    }
  }

  function logout() {
    googleLogout()
    setUser(null)
  }

  return (
    <>
     <Nav />
     <h1>Olá, bem vindo à home!</h1><br></br>
     <p>Para realizar seu login
        <button>Clique aqui</button>
     </p>
     {!user ? (
        <GoogleLogin onSuccess={login} onError={() => console.error('Login falhou')} />
      ) : (
        <div className={styles.userInfo}>
          <h2>Bem-vindo, {user.name}!</h2>
          <img
            src={user.picture}
            alt="Perfil"
            className={styles.profilePicture}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <p>Email: {user.email}</p>
          <button onClick={logout} className={styles.logoutButton}>
            Sair
          </button>
        </div>
      )}
    </>
  )
}

export default Home
