import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Apresentacao from './pages/Apresentacao';
import { ProtectedRoute } from './components/ProtectedRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={
        <ProtectedRoute>
          <Apresentacao />
        </ProtectedRoute>
      } />
      <Route path="/cadastro" element={
        <ProtectedRoute>
          <Cadastro />
        </ProtectedRoute>
      } />
    </Routes>
  );
}