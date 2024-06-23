import { useState } from "react";

export default function ListaPaciente(props) {
    // console.log(props)

    const [quantity, setQuantity] = useState(1)
    const [valueButton, setValueButton] = useState(true)
    const paciente = props.paciente
    console.log("asasass"+paciente.valor)
    

    // Função para comprar um produto informando o preço final
    const seleciona_paciente = () => {
        if (window.confirm(`Preço final: ${Math.round((paciente.price * quantity) * 100) / 100}`)) {
            alert('Produto comprado com sucesso!')
            setQuantity(1)
        }
    }


    return (
        <article className="paciente">
            <img src={paciente.imagem} alt="paciente"/>
            <h3 className="price-product">
                R$ <span>{paciente.valor}</span>
            </h3>
            <p className="name-product">{paciente.nome}</p>
            <button className="buy" onClick={seleciona_paciente}>Atender</button>
        </article>

    );
}