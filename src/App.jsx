import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const App = () => {
  return (





    <div>
      <div  className="container mx-auto">
        {/* Header section */}
      <Navbar></Navbar>
      {/* Banner section */}
      <Banner></Banner>
      </div>
      {/* footer section */}
      <Footer></Footer>
    </div>
  );
};

export default App;