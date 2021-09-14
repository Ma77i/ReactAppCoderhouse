import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <h1 className='titulo'>Draw<b>Poke</b>Store</h1>
            <p className='parrafo'>Bienvenidos a la tienda numero 1° en dibujos sobre Pokemon, aqui podras adquirir el arte pokemon hecho a lapiz</p>
            <div>

            </div>
            <Link to='/tienda' className='links'>
                <h2 className='ingreso links'>Ingrese a la Tienda</h2>
            </Link>
        </>
    )
}

export default Home