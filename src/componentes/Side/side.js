
import IMAGES from '../images'
import './side.css'
import { Context } from '../Context/context'
import { useContext, useState, useEffect } from 'react'
const Side = () => {




    const { valorSide } = useContext(Context)
    const { corfundo } = useContext(Context)
    const { setCorfundo } = useContext(Context)
    const { quant } = useContext(Context)





    const [hideValor, sethideValor] = useState(true)





    const hideCarrinho = () => {
        { corfundo === 'side-bar-ativo' ? setCorfundo('side-bar') : setCorfundo('side-bar-ativo') }
        sethideValor(!hideValor)
    }



















    return (

        <div className={corfundo}>
            <div className='imagem-avatar'>
                <img onClick={hideCarrinho} className="carrinho" src={IMAGES.Carrinho}></img>
                <img className="avatar" src={IMAGES.Avatar}></img>
            </div>
            <div className='resultadoCarrinho'>
                {corfundo === 'side-bar-ativo' ? <p className='valorSide'>{valorSide}</p> : ''}
                {corfundo === 'side-bar-ativo' ? <h4 className='quantSide'>{quant}</h4> : ''}
            </div>
        </div>
    )

}


export default Side