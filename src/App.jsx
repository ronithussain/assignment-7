import { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  // banner btn click and add coin to the navbar setCoin
  const [coins, setCoins] = useState(0);
  const incrementCoins = () => {
    setCoins(coins + 6000000);
    toast('Add coins to the navbar successful')
  };

  




  return (
    <div>
      <ToastContainer position="top-center"/>
      <div className=" h-24 sticky top-0 bg-opacity-50 backdrop-blur-md bg-white z-50">
         {/* Header section */}
      <Navbar coins={coins}></Navbar>
      </div>

      <div  className="container mx-auto">
      {/* Banner section */}
      <Banner incrementCoins={incrementCoins}></Banner>
      </div>
      
    
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default App;