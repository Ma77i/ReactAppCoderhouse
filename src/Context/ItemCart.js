import tacho from "../tachito_borrar.svg";
import { Link } from "react-router-dom";

const ItemCart = ( {item, borrarDelCarrito} ) => {

    let subtotal = item.cantidad * item.precio;

    return (
        <>
        <article className="item">
            <div id={item.id} className="item__imagen__descripcion">
                <div className="item__imagen">
                    <Link to={`/producto/${item.prod_id}`}>
                        <img src={item.imagen} alt={item.altimg} title={item.titulo} />
                    </Link>
                </div>
                <div className="item__descripcion">
                    <h4>{item.titulo}</h4>
                    <p title={item.descripcion}>{item.descripcion.substring(0, 43)}...</p>
                </div>
            </div>
            <div className="importe__cantidad__subtotal__delete">
                <div className="item__importe">
                    <p title="Precio por unidad">${item.precio}</p>
                </div>
                <div className="item__cantidad">
                    <p>cantidad: {item.cantidad}</p>
                </div>
                <div className="item__subtotal">
                    <p>Subtotal: $<span>{subtotal}</span></p>
                </div>
                <div className="item__delete">
                <img onClick={ ()=> borrarDelCarrito(item.nombre, item.id)} src={tacho} alt="eliminar" title="eliminar el producto del carrito" />
                </div>
            </div>
        </article>
        <div className="aclara_cant">
            <p>* Stock disponible de {item.titulo}: {item.stock} unidad/es. Para cambiar la cantidad hacer click en la imagen</p>
        </div>
    </>
    );
}

export default ItemCart;