import React from 'react';

function CadastraPaciente() {
  const newItemAtend = () => {
    // Função de adicionar atendimento
  };

  return (
    <section className="items">
      <table id="myTableAtendimento">
        <tbody>
          <tr>
            <th>
              <label htmlFor="Paciente">Paciente Atendido:</label>
            </th>
            <td>
              <input type="text" id="id_paciente_atendido" name="paciente_atendido" disabled />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="codigoQueixa">Código da Queixa Principal:</label>
            </th>
            <td>
              <select id="hda_cod_queixa_principal" name="codigoQueixa">
                <option value="1">Dor Fraca</option>
                <option value="2">Dor Média</option>
                <option value="3">Dor Forte</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="queixaPrincipal">Queixa Principal:</label>
            </th>
            <td>
              <textarea id="hda_queixa_principal" name="queixaPrincipal" rows="4" cols="50" maxLength="200"></textarea>
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="hipertensao">Tem Hipertensão:</label>
            </th>
            <td>
              <input type="checkbox" id="hpr_hipertensao" name="hipertensao" value="S" />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="diabetes">Tem Diabetes:</label>
            </th>
            <td>
              <input type="checkbox" id="hpr_diabetes" name="diabetes" value="S" />
            </td>
          </tr>
          <tr>
            <th>
              <label htmlFor="cancer">Teve Câncer:</label>
            </th>
            <td>
              <input type="checkbox" id="hpr_cancer" name="cancer" value="S" />
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center' }}>
              <button onClick={newItemAtend} className="addBtn">Adicionar Atendimento</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CadastraPaciente;
