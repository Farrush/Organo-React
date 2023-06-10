import './Footer.css'
function Footer(){
    return(
        <footer className='footer'>
            <div>
                <h5>Meus links:</h5>
                <div className='icones'>
                    <a target="_blank" href="https://www.github.com/Farrush"><img src="/imagens/github.png" alt="Ícone do Github"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/rafael-carrenho-taranto-87a494231/"><img src="/imagens/lkd.png" alt="Ícone do Linkedin"/></a>
                </div>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png'/>
            </div>
        </footer>
    )
}

export default Footer