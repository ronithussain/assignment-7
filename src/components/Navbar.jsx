import logo from '../assets/logo.png'


const Navbar = ({coins}) => {
    
   



    return (
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center space-y-5 ">
            <div>
                <img className='mt-2' src={logo} alt="" />
            </div>
            <div className="flex flex-col md:flex-row items-center">
            <ul className="flex gap-5 text-[#131313B3] font-medium sm:mr-10">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
               <button className='btn sm:mr-5 mt-3 sm:mt-0'> {coins} Coins <i className="fa-brands fa-bitcoin text-orange-600 text-2xl"></i></button>
               <p> </p>
            </div>
        </div>
    );
};

export default Navbar;