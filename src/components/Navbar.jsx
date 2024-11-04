import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center space-y-5 mt-2">
            <div>
                <img className='mt-2' src={logo} alt="" />
            </div>
            <div className="flex items-center">
            <ul className="flex gap-5 text-[#131313B3] font-medium mr-10">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
               <button className='btn mr-5'>Coin <i className="fa-brands fa-bitcoin text-orange-600 text-2xl"></i></button>
            </div>
        </div>
    );
};

export default Navbar;