import { useEffect, useState } from "react"
import ListaPaciente from "../components/ListaPaciente"
import banner from '../assets/banner.png'
import axios from 'axios'

export default function Pacientes() {
  const [pacienteList, setPacienteList] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/busca_pacientes')
      .then(res => setPacienteList(res.data.pacientes))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="content-product">
      <header>
        <div className="user">
          <span>Enfermeiro</span>
        </div>
      </header>

      <section className="banner">
        <img src={banner} alt="Banner" />
      </section>

      <section className="main-products">
        {pacienteList.map((p, index) => (
          <ListaPaciente key={index} paciente={p} />
        ))}
      </section>
      <footer></footer>
    </div>
  )
}
