
// export default function App() {
//   return (
//     <div>
//       <Pacientes />
//     </div>
//   )
// }

import Pacientes from './pages/Pacientes'
import React, { useState } from 'react';
import Header from './components/Header';
import BuscaPaciente from './components/BuscaPaciente';
import CadastraPaciente from './components/CadastraPaciente';


function App() {
  const [view, setView] = useState('busca');

  return (
    <div>
      <Header title={
        view === 'busca' ? 'Busca de Pacientes' :
        view === 'cadastra' ? 'Cadastro de Pacientes' :
        'Fila de Pacientes'
      } />
      <div className="buttons">
        <button onClick={() => setView('busca')}>Buscar Paciente</button>
        <button onClick={() => setView('cadastra')}>Cadastrar Paciente</button>
        <button onClick={() => setView('lista')}>Listar Fila de Pacientes</button>
      </div>
      {view === 'busca' && <BuscaPaciente />}
      {view === 'cadastra' && <CadastraPaciente />}
      {view === 'lista' && <Pacientes />}
    </div>
  );
}

export default App;