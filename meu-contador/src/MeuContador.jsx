import { useState } from "react"

export default function MeuContador() {

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)
    }
    function diminuir() {
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Meu contador: {contador}</h1>
            {contador > 9 ? <div>
                <button onClick={aumentar}>AUMENTAR</button>
                <button onClick={diminuir}>DIMINUIR</button>
            </div> : <button onClick={aumentar}>AUMENTAR</button>}




        </div>)
}
