import './nav.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/useAuth';
import Swal from 'sweetalert2';

function Nav() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleProtectedLinkClick = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      Swal.fire({
        title: 'Login Necessário',
        text: 'Realize o login para visualizar esta página',
        icon: 'info',
        confirmButtonText: 'Voltar',
        confirmButtonColor: '#5d46e2',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/');
        }
      });
    }
  };

  return (
    <>
      <div id='nav'>
        <Link to="/">Home</Link>
        <Link 
          to="/apresentacao" 
          onClick={handleProtectedLinkClick}
          style={!user ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          Apresentação
        </Link>
        <Link 
          to="/cadastro" 
          onClick={handleProtectedLinkClick}
          style={!user ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
        >
          Cadastro
        </Link>
      </div>
    </>
  )
}

export default Nav
