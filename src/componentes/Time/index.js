import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, 0.33), backgroundImage: 'url(/imagens/fundo.png)' }

    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input 
                type="color" 
                className='corTime' 
                value={props.cor} 
                onChange={event => props.mudarCor(event.target.value, props.id)}
            />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>

                {props.colaboradores.map( (colaborador) => {
                    return <Colaborador corDeFundo={props.cor} 
                    id={colaborador.id}
                    key={colaborador.id} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    favorito={colaborador.favorito}
                    onDelete={props.onDelete}
                    onFav={props.onFav}/>
                }
            )}
            </div>
        </section> 
        : ''
    )
}

export default Time