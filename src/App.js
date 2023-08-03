import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    { 
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: 'Rafael',
      cargo: 'Programador Front-end',
      imagem: 'https://github.com/farrush.png',
      time: 'Front-End',
      favorito: false
    },
    {
      id: uuidv4(),
      nome: 'Rafael',
      cargo: 'Programador Mobile',
      imagem: 'https://github.com/farrush.png',
      time: 'Mobile',
      favorito: false
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, favorito: false}])
  }
  const novoTime = (novoTime) => {
    setTimes([
      ...times, { ...novoTime, id: uuidv4()}
    ])
  }

  const resolverFavorito = (id) => {
      setColaboradores(colaboradores.map(colaborador => {
          if(colaborador.id === id){
            colaborador.favorito = !colaborador.favorito
          }
          return colaborador
        }))
  }
  const deletarColaborador = (id) =>{
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  function mudarCorDoTime(cor,id){
    setTimes(times.map(time =>{
      if(time.id === id){
        time.cor = cor
      }
      return time
    }))
  }
  return (
    <div className="App">

      <Banner />

      <Formulario 
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
        novoTime={time => novoTime(time)}
      />

      {times.map(time => 
      <Time 
        onFav={id => resolverFavorito(id)}
        mudarCor={mudarCorDoTime}
        key={time.id}
        id={time.id} 
        nome={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        onDelete={id => deletarColaborador(id)}
      />)}   

    </div>
  );
}

export default App;
