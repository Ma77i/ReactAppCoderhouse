import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import { SiInstagram, SiFacebook, SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si'


const Footer = () => {

    return (
        <>
            <div className='footer'>
                <div className='navFooter'>
                    <Link to='/tienda' className='links textDeco'><b>Tienda</b></Link>
                    <Link to='/category/1' className='links textDeco'>Categoria 1</Link>
                    <Link to='/category/2' className='links textDeco'>Categoria 2</Link>
                    <Link to='/category/3' className='links textDeco'>Categoria 3</Link>
                </div>
                <div className='centralFooter'>
                    <img className='logo__footer' src="../img/pokebola.png" alt="Pokebola/Logo" width='35' />
                    <h4>Tienda pokemon</h4>
                    <div className='credits'>
                        <p className='m-0'>Proyecto creado para el curso de React de <a href="http://www.coderhouse.com" className='links'>Coderhouse</a></p>
                        <a href='https://github.com/Ma77i' target='_blank' rel='noreferrer'><SiGithub className='react-icons'/></a>
                        <p className='m-0'>© Copyright Matias Silva</p>
                    </div>
                </div>
                <div className='linkFooter'>
                    <IconContext.Provider value={{className: "react-icons" }}>
                        <a href='http://facebook.com' target='_blank' rel='noreferrer'><SiFacebook /> </a>
                        <a href='https://instagram.com' target='_blank' rel='noreferrer'><SiInstagram /> </a>
                        <a href='https://twitter.com' target='_blank' rel='noreferrer'><SiTwitter /> </a>
                        <a href='https://Linkedin.com' target='_blank' rel='noreferrer'><SiLinkedin /> </a>
                    </IconContext.Provider>
                </div>
            </div>
        </>
    )
}

export default Footer