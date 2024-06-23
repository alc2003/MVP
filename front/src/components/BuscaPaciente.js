import React from 'react';

function BuscaPaciente() {
  const getList = () => {
    // Função de busca
    let inputPaciente = document.getElementById("id_paciente").value;
  console.log(inputPaciente)
  let url = 'http://127.0.0.1:5000/busca_paciente_id?id=' + inputPaciente;
  fetch(url, {
    method: 'get',
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados do paciente');
      }
      return response.json();
    })
    .then((paciente) => {
      clearList(); // Limpa a lista antes de inserir os dados do paciente
      insertList(paciente.nome, paciente.cns, paciente.id); // Insere os dados do paciente na lista
    })
    .catch((error) => {
      alert(error.message); // Exibe uma mensagem do erro em um alert
      console.error('Error:', error); // Registra o erro no console
    });
  };
  
  const insertList = (nome, cns, id) => {
    // Cria um array com os dados do paciente
    var item = [nome, cns, id];
    var table = document.getElementById('myTable');
    var row = table.insertRow();
  
    // Loop para percorrer os dados do paciente
    for (var i = 0; i < item.length; i++) {    
      var cel = row.insertCell(i);    
      cel.textContent = item[i];
    }    
  }


  const clearList = async () => {
    let table = document.getElementById("myTable");
    let rowCount = table.rows.length;
    console.log(table.rows.length)
    // Comece de 1 para evitar remover a linha de título
    for (let i = 1; i < rowCount; i++) {
      table.deleteRow(1); // Sempre remova a segunda linha, pois a primeira é a linha de título
    }
  }

  return (
    <section className="newItem">
      <input type="text" id="id_paciente" placeholder="Id do Paciente:" />
      <button onClick={getList} className="addBtn">Buscar Paciente na Base</button>
      <section className="items">
        <table id="myTable">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNS</th>
              <th>Id Paciente</th>
            </tr>
          </thead>
          <tbody>
            {/* Linhas de pacientes serão adicionadas aqui */}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default BuscaPaciente;


