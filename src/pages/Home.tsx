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
     <div className={styles.corpo}>
        <div className={styles.card}>
          {!user ? (
            <>
              <h1 className={styles.titulo}>Seja bem vindo!</h1>
              
              <div className={styles.loginSection}>
                <h3 className={styles.instrucao}>Por favor, faça login com sua conta Google</h3>
                <div className={styles.googleBtnContainer}>
                  <GoogleLogin 
                    onSuccess={login} 
                    onError={() => console.error('Login falhou')} 
                    shape="pill"
                  />
                </div>
              </div>
            </>
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
              <p>{user.email}</p>
              <button onClick={logout} className={styles.logoutButton}>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
