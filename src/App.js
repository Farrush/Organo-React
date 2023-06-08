import { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Rota from './components/Rota';

function App() {
  const [campeoes, setCampeoes] = useState([
    {
      nome: "Pantheon",
      funcao: "Lutador/Assassino",
      imagem: "https://www.mobafire.com/images/champion/square/pantheon.png",
      rota: "Topo"
    },
    {
      nome: "Akali",
      funcao: "Assassino",
      imagem: "https://www.mobafire.com/images/champion/square/akali.png",
      rota: "Meio"
    },
    {
      nome: "Poppy",
      funcao: "Tanque/Lutador",
      imagem: "https://www.mobafire.com/images/champion/square/poppy.png",
      rota: "Selva"
    },
    {
      nome: "Quinn",
      funcao: "Atirador",
      imagem: "https://www.mobafire.com/images/champion/square/quinn.png",
      rota: "Topo"
    },
    {
      nome:"Kalista",
      funcao:"Atirador",
      imagem:"https://www.mobafire.com/images/champion/square/kalista.png",
      rota:"Atirador"
    },
    {
      nome:"Swain",
      funcao:"Mago",
      imagem:"https://www.mobafire.com/images/champion/square/swain.png",
      rota:"Suporte"
    },
    {
      nome:"Fiora",
      funcao:"Duelista",
      imagem:"https://www.mobafire.com/images/champion/square/fiora.png",
      rota:"Topo"
    },
  ])
  const rotas = [
    {
      nome:"Topo",
      cor_pri:"57C278",
      cor_sec:"D9F7E9"
    },
    {
      nome:"Selva",
      cor_pri:"82cffa",
      cor_sec:"e8f8ff"
    },
    {
      nome:"Meio",
      cor_pri:"a6d157",
      cor_sec:"F0F8E2"
    },
    {
      nome:"Atirador",
      cor_pri:"e06b69",
      cor_sec:"fde7e8"
    },
    {
      nome:"Suporte",
      cor_pri:"db6ebf",
      cor_sec:"fae9f5"
    }
  ]
  const cadastro = (objeto) =>{
    setCampeoes([...campeoes, objeto])
  }
  return (
    <div className="App">
        <Banner/>
        <Form 
          aoCadastrar={objeto => cadastro(objeto)}
          rotas={rotas.map(rota => rota.nome)}
        />
        {
          rotas.map(rota => 
           <Rota 
              key={rota.nome} 
              rota={rota.nome} 
              corPrimaria={rota.cor_pri} 
              corSecundaria={rota.cor_sec}
              campeoes={campeoes.filter(campeoes => campeoes.rota == rota.nome)}
            />
          )
        }
        <Footer/>
    </div>
  );
}

export default App;
