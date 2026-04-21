import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import type { AuthContextType, User } from './AuthContext';

export type { User };

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('O useAuth deve ser usado dentro de um AuthProvider.');
  }
  return context;
}
