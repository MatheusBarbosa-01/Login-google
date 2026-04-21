import type { ReactNode } from 'react';
import { useAuth } from '../contexts/useAuth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div 
        onClick={() => {
          Swal.fire({
            title: 'Login Necessário',
            text: 'Realize o login para visualizar esta página',
            icon: 'info',
            confirmButtonText: 'Voltar',
            confirmButtonColor: '#5d46e2',
            backdrop: true,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/');
            }
          });
        }} 
        style={{ 
          filter: 'blur(5px)', 
          pointerEvents: 'auto',
          cursor: 'pointer',
          userSelect: 'none'
        }}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
