import Card from '../Card'
import './Rota.css'

const Rota = (props)=>{
    return(
        props.campeoes.length > 0 && <section style={{"backgroundColor":'#'+props.corSecundaria}} className={'container'}>
            <h3 style={{"borderBottom":'solid 4px #'+props.corPrimaria}}>{props.rota}</h3>
            <div className='cards'>
                {props.campeoes.map(campeao=>
                            <Card
                            key={campeao.nome}
                            nome={campeao.nome}
                            imagem={campeao.imagem}
                            funcao={campeao.funcao}
                            corDeFundo={props.corPrimaria}
                            />
                    )}

            </div>
        </section>
    )
}

export default Rota