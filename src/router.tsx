import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Apresentacao from './pages/Apresentacao';
 

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apresentacao" element={<Apresentacao />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}