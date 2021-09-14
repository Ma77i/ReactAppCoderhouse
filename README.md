# Bienvenidos a DrawPokeStore

Pryecto creado para el curso de React de Coderhouse [DrawPokeStore](https://github.com/Ma77i/ReactAppCoderhouse).

## Sobre DrawPokeStore

Tienda E-commerce de fantasia donde la idea a futuro es vender dibujos hechos a mano o digitales sobre pokemon

## Dependecias externas

Elegí trabajar con [React-Bootstrap](https://react-bootstrap.github.io/).

## Inicializando el Proyecto
Este proyecto fue creado con Create React App.
Ingresando a la carpeta del proyecto, se puede ejecurar en la consola el siguiente comando:

### npm start
Correr la aplicación en modo desarrollo.
Abrir http://localhost:3000 para visualizar el proyecto en el navegador.

La página se recargará si se hacen cambios en el código.
Cualquier error se visualizará en consola.

## Estructura

### Home

Página de inicio donde detallo el motivo de la app y donde incluyo un link para ir a la tienda.

### NavBar

Barra de navegacion pegada en el tope de la pagina para navegar hacia el home, la tienda, el carrito o las categorias.

### Tienda

Página donde se muestran los productos con nombre, imagen, precio y descripción y un link en cada card para ver el detalle de cada producto.

### Detail

Página para ver cada producto detallado con imagen, nombre, precio, descripción, stock, eleccion de cantidad, boton para agregar al carrito y link para seguir comprando en la tienda o terminar compra y pasar a carrito.

### Carrito

Página donde se muestra detallado el producto seleccionado con precio, cantidad y total, con botones para quitar un producto individual o vaciar el carrito, y un boton/enlace para finalizar compra y pasar al formulario de validación.

### Formulario de validación

Formulario de validación de compra donde se pide Nombre, Teléfono y Mail con boton de submit para obtener ID de orden

### Order Ready

Página donde se muestra el ID de compra con boton para volver a la tienda
