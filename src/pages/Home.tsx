import Nav from '../components/nav';
import { GoogleLogin, googleLogout, type CredentialResponse } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useAuth } from '../contexts/useAuth'
import type { User } from '../contexts/useAuth'
import styles from '../Home.module.css'

function Home() {
  const { user, setUser } = useAuth();

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
      {user && (
        <div className={styles.profileCorner}>
          <img
            src={user.picture}
            alt="Perfil"
            className={styles.cornerProfilePicture}
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
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
              <h2 className={styles.welcomeMessage}>
                Olá {user.name}, seja bem vindo a nossa aplicação!
              </h2>
              <p className={styles.accessMessage}>
                Agora você tem acesso as outras páginas, explore!!!
              </p>
              <p className={styles.emailDisplay}>{user.email}</p>
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
