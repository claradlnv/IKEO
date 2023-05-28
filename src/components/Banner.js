import "../styles/Banner.css"
import cart from "../assets/cart.png"

function Banner(){
    return (
        <div className="banner">
            <h1 className="banner-title">IKEO</h1>
            <img src={cart} alt="Cart" className="banner-cart"/>
        </div>
    )
}

export default Banner;