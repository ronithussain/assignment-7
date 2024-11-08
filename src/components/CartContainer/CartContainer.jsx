import About from './About/About';
import Cart from './Cart/Cart';
import './CartContainer.css'
const CartContainer = ({ handleIsActiveState, isActive,handleSelectedPlayer,selectedPlayer,handleDelete }) => {
   
    return (
        <div>
            
            <div>
                <div className='flex justify-center sm:justify-end  container mx-auto mt-24'>
                    
                    <div className='flex'>
                    <div onClick={() => handleIsActiveState('cart')} className={`btr ${isActive.cart ? "button active" : "button"}`}>Available</div>
                    <div onClick={() => handleIsActiveState('about')} className={`bt ${isActive.cart ? "button " : "button active"}`}>Selected ({selectedPlayer.length})</div>
                    </div>

                </div>
            {isActive.cart?<Cart
            handleSelectedPlayer={handleSelectedPlayer}
            ></Cart>:
            <About
            handleIsActiveState={handleIsActiveState}
            handleDelete={handleDelete}
            selectedPlayer={selectedPlayer}
            ></About>}
            </div>

        </div>
    );
};

export default CartContainer;