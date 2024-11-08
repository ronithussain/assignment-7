import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartContainer from "./components/CartContainer/CartContainer";



const App = () => {
  // banner btn click and add coin to the navbar setCoin
  const [coins, setCoins] = useState(0);

  const incrementCoins = () => {
    setCoins(coins + 6000000);
    toast('Add coins to the navbar successful')
  };

  const [price,setPrice] = useState(0);

  const handleIncreasePrice =(pr)=>{
    setPrice(price +coins)
  }


  // toggle button
  const [isActive, setIsActive] = useState({
    cart:true,
    status:"active"
  })
  const handleIsActiveState = (status) => {

    if(status == "cart"){
      setIsActive({
        cart:true,
        status:"cart"
      })
    }
    else{
      setIsActive({
         cart:false,
         status:"about"
      })
    }
  }


// -----------about button work-----------
const [selectedPlayer, setSelectedPlayer] = useState([]);


const handleDelete =(id) => {
  const remainingPlayer = selectedPlayer.filter(p => p.playerId != id);
  setSelectedPlayer(remainingPlayer);
}




  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayer.find((p) => p.playerId == player.playerId);
    if(isExist){
      toast.error('Player is already exist')
    }
    else{
      handleIncreasePrice(player.price)
      const newSelectedPlayer = [...selectedPlayer,player];
    setSelectedPlayer(newSelectedPlayer);
    }
  }



  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="h-44 sm:h-24 sticky top-0 bg-opacity-50 backdrop-blur-md bg-white z-50">
        {/* Header section */}
        <Navbar coins={coins}></Navbar>
      </div>

      <div className="container mx-auto">
        {/* Banner section */}
        <Banner incrementCoins={incrementCoins}></Banner>
      </div>

      
      {/* cart-container-section */}
      <CartContainer
      handleDelete={handleDelete}
      selectedPlayer={selectedPlayer}
      handleSelectedPlayer={handleSelectedPlayer}
      isActive={isActive}
      handleIsActiveState={handleIsActiveState}
      ></CartContainer>

      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default App;