import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <h1>La madre de Las Tiendas</h1>
            <Link to='/tienda' className='links'>
                <h2 className='ingreso links'>Ingrese a la Tienda</h2>
            </Link>
        </>
    )
}

export default Home