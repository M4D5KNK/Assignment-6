import { useStoreContext } from '../context/context.jsx';
import { Link } from 'react-router-dom';
import HeaderSection from './components/HeaderSection.jsx';
import "./CartView.css";
import FooterSection from './components/FooterSection.jsx';

function CartView() {
    const { cart, setCart } = useStoreContext();
    
    return (
        <div>
            <HeaderSection />
            <div className="cart-view">
                <h1 className="cart-title">Shopping Cart</h1>
                <div className="cart-items">
                    {cart.size === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is empty</p>
                            <Link to="/movies" className="browse-button">Browse Movies</Link>
                        </div>
                    ) : (
                        cart.entrySeq().map(([key, value]) => {
                            return (
                                <div className="cart-item" key={key}>
                                    <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.title} />
                                    <h1>{value.title}</h1>
                                    <button onClick={() => setCart((prevCart) => prevCart.delete(key))}>Remove</button>
                                </div>
                            )
                        })
                    )}

                </div>
            </div>
            <FooterSection />
        </div>

    )
}

export default CartView;