import IconCart from '../images/icon-cart.svg'
import { useState} from 'react'




function Button({ props, secondprops, thirdprops, valorSetado , background, quantidade }) {



    const [valor, setValor] = useState(0)
  




    const somar = () => {
        setValor(valor + 1)
    }

    const subtrair = () => {
        setValor(valor - 1)

        if (valor === 0) {
            setValor(0)
        }
    }




    const clicar = () => {
        quantidade('Quantidade de itens: ' + valor)
        props(valor)
        secondprops(valor * 125 + 'R$')
        thirdprops('red')
        valorSetado('Valor: ' + valor * 125 + 'R$')
        background('side-bar-ativo')
    }







    return (
        <div>

            <div className="calcular-produto">
                <div className="calculo">
                    <p id="subtrair" onClick={subtrair} className="soma-sub">-</p>
                    <p className="zero">{valor}</p>
                    <p id="somar" onClick={somar} className="soma-sub">+</p>
                </div>
                <button className="btn " onClick={() => clicar()}>
                    <img src={IconCart} alt="icon" />
                    <p >Add to cart</p>
                </button>

            </div>
        </div>
    )
}

export default Button