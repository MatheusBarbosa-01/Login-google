import './nav.css'
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <>
     <div id='nav'>
      <Link to="/">Home</Link>
      <Link to="/apresentacao">Apresentação</Link>
      <Link to="/cadastro">Cadastro</Link>
     </div>
    </>
  )
}

export default Nav
