import './Colaborador.css'
import { AiOutlineCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, favorito, onDelete, onFav }) => {

    function favoritar(){
        onFav(id)
    }
    const propsFavorito = {
        size: '30',
        onClick:() => favoritar()
    }
    return (
    <div className='colaborador'>
        <AiOutlineCloseCircle 
            size={30} 
            onClick={() => onDelete(id)} 
            className='delete'/>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito 
                    ? <AiFillHeart {...propsFavorito} color={'#ff0000'}/> 
                    : <AiOutlineHeart {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador