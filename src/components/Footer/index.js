import './Footer.css'
function Footer(){
    return(
        <footer className='footer'>
            <div className='icones'>
                <a target="_blank" href="https://www.facebook.com"><img src="/imagens/fb.png" alt="Ícone do Facebook"/></a>
                <a target="_blank" href="https://twitter.com"><img src="/imagens/tw.png" alt="Ícone do Twitter"/></a>
                <a target="_blank" href="https://www.instagram.com/farloween/"><img src="/imagens/ig.png" alt="Ícone do Instagram"/></a>
            </div>
            <div>
                <img src='/imagens/logo.png'/>
            </div>
            <div>
                Desenvolvido por Alura.
            </div>
        </footer>
    )
}

export default Footer