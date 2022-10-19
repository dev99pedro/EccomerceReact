
import { useState } from 'react'
import IMAGES from '../images'
import Button from '../Button/button'
import './section.css'
import Side from '../Side/side'
import { Context } from '../Context/context'
import '../Side/side.css'
import './media-querie-section.css'





const Section = () => {

    const [image, setImage] = useState(
        IMAGES.ImgProd1
    )








    const [count, setCount] = useState()
    const [user, setUser] = useState()
    const [cor, setCor] = useState()
    const [valorSide, setvalorSide] = useState()
    const [corfundo, setCorfundo] = useState('side-bar')
    const [quant, setQuant] = useState()


    const [toggle,setToggle] = useState(0)

    function clicar(index) {
        setToggle(index)
    }


    return (

        <div className="section">
            <Context.Provider value={{ valorSide, setvalorSide, corfundo, setCorfundo, quant }}>
                <div className='Nav-Side'>
                    <div className="imagens">

                        <div className="imagem-grande">
                            <img className="img" width="450" height="auto" src={image} alt="carrinho" />
                        </div>
                        <div className="imagem-pequenas">
                            <img className={toggle === 1 ? 'img-pequena-ativa' : 'img-pequena'} width="100" onClick={() => clicar(1)} onMouseOver={() => setImage(IMAGES.ImgProd1)} height="auto" src={IMAGES.ImgTh1} alt="carrinho1" />
                            <img className={toggle === 2 ? 'img-pequena-ativa' : 'img-pequena'} width="100" onClick={() => clicar(2)} onMouseOver={() => setImage(IMAGES.ImgProd2)} height="auto" src={IMAGES.ImgTh2} alt="carrinho2" />
                            <img className={toggle === 3 ? 'img-pequena-ativa' : 'img-pequena'} width="100" onClick={() => clicar(3)} onMouseOver={() => setImage(IMAGES.ImgProd3)} height="auto" src={IMAGES.ImgTh3} alt="carrinho3" />
                            <img className={toggle === 4 ? 'img-pequena-ativa' : 'img-pequena'} width="100" onClick={() => clicar(5)} onMouseOver={() => setImage(IMAGES.ImgProd4)} height="auto" src={IMAGES.ImgTh4} alt="carrinho4" />
                        </div>
                    </div>
                    <div className="textos">
                        <span className="span-company">
                            Sneaker Company
                        </span>
                        <div className="nome-produto" >
                            <h2>Fall Limited Edition Sneakers</h2>
                        </div>
                        <div className="descricao-produto">
                            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
                                they'll whithstand everything the weather can offer</p>
                        </div>
                        <div className="preco-produto">
                            <h3 className="valor">$125.00</h3>
                            <span className="porcentagem">50%</span>
                        </div>
                        <div className="desconto-produto">
                            <p><s>R$250.00</s></p>
                        </div>

                        <Button quantidade={quant => setQuant(quant)} background={corfundo => setCorfundo(corfundo)} valorSetado={valorSide => setvalorSide(valorSide)} thirdprops={setCor} secondprops={setUser} props={setCount} />
                        {count ?
                            <div className='resultado-botao'>
                                <img className='carrinho' alt="carrinho" src={IMAGES.Carrinho} />
                                <h4>Quantidade de produtos: {count}</h4>
                            </div> : ''}
                        {count ? <p className='valor-total-botao'> Valor Total: <span className='span-valor'>{count * 125} R$ </span></p> : ''}




                        <div className="res-carrinho">

                        </div>
                    </div>
                </div>
                <div className='side'>
                    <Side />
                </div>
            </Context.Provider>
        </div >
    )
}


export default Section