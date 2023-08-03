import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import { v4 as uuidv4 } from 'uuid'
import './Formulario.css'

const Formulario = (props) => {
    //Estado colaborador
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    //Estado time
    const [nomeTime, setNomeTime] = useState('')
    const [cor, setCor] = useState('')

    const aoSalvarColab = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    const aoSalvarTime = (evento) => {
        evento.preventDefault()
        props.novoTime({
            nome: nomeTime,
            cor: cor
        })
        setNomeTime('')
        setCor('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvarColab}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <label className='label-cor'>Cor</label>
                <input className='input-cor' onChange={event => setCor(event.target.value)} value={cor} type='color' obrigatorio/>
                
                <Botao>
                    Criar Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario