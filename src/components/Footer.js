import { Link } from 'react-router-dom'
import { IconContext } from "react-icons";
import { SiInstagram, SiFacebook, SiGithub } from 'react-icons/si'


const Footer = () => {

    return (
        <>
            <div className='footer'>
                <img className='logo__footer' src="../img/pokebola.png" alt="Pokebola/Logo" width='40' />
                <h4>Tienda pokemon</h4>
                <div className='enlaces'>
                    <div>
                        <IconContext.Provider value={{className: "react-icons" }}>
                            <a href='http://facebook.com' target='_blank' rel='noreferrer'><SiFacebook /> </a>
                            <a href='https://instagram.com' target='_blank' rel='noreferrer'><SiInstagram /> </a>
                        </IconContext.Provider>
                        
                    </div>
                    <div>
                        <Link to='/tienda'>Tienda </Link>
                        <Link to='/category/1'>CAT1 </Link>
                        <Link to='/category/2'>CAT2 </Link>
                        <Link to='/category/3'>CAT3 </Link>
                    </div>
                </div>
                <div className='credits'>
                    <p className='m-0'>Proyecto creado para el curso de React de <a href="http://www.coderhouse.com">Coderhouse</a></p>
                    <a href='https://github.com/Ma77i' target='_blank' rel='noreferrer'><SiGithub className='react-icons'/></a>
                    <p className='m-0'>© Copyright Matias Silva</p>
                </div>
            </div>
        </>
    )
}

export default Footer