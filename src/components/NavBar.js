import CartWidget from "./CartWidget"




const NavBar = () =>
    <nav>
        <h1>Tienda Oficial</h1>
        <a href="index.html">Home</a>
        <a href="shop.html">Shop</a>
        <a href="contact.html">Contact</a>
        <CartWidget></CartWidget>
    </nav>

    export default NavBar