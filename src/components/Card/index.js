import './Card.css'
const Card = (props) =>{
    return(
        <div className='card'>
            <div className='imageDiv' style={{"backgroundColor":"#"+props.corDeFundo}}>
                <img src={props.imagem} alt={"Foto do campeão "+props.nome}></img>
            </div>
            <div className='descDiv'>
                <h4>{props.nome}</h4>
                <h5>{props.funcao}</h5>
            </div>
        </div>
    )
}

export default Card