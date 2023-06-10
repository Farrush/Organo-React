import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import List from '../List'
import Button from '../Button'

export const Form = (props)=>{

    const aoSalvar = (event) =>{
        event.preventDefault()
        props.aoCadastrar(
            {
                nome: nome,
                funcao: funcao,
                imagem: imagem,
                rota: rota
            })
            setNome('')
            setFuncao('')
            setImagem('')
            setRota('')
    }
    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [rota, setRota] = useState(props.rotas[0])

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do campeão</h2>
                <TextField 
                    mandatory={true} 
                    label="Nome" 
                    placeholder="Sylas"
                    value={nome} 
                    inputAlterado={valor => setNome(valor)} 
                />
                <TextField 
                    mandatory={true} 
                    label="Função" 
                    placeholder="mago"
                    value={funcao} 
                    inputAlterado={valor => setFuncao(valor)} 
                />
                <TextField 
                    label="Imagem" 
                    placeholder="https://www.mobafire.com/images/champion/square/sylas.png"
                    value={imagem} 
                    inputAlterado={valor => setImagem(valor)} 
                />
                <h4>Sugestão: https://www.mobafire.com/images/champion/square/<strong>nomedesejado</strong>.png</h4>
                <List 
                    label="Rota" 
                    itens={props.rotas}
                    value={rota}
                    inputAlterado={valor => setRota(valor)}
                />
                <Button texto="Criar Card"></Button>
            </form>
        </section>
    )
}
