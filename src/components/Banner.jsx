import bg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'
import '../index.css'

const Banner = ({incrementCoins}) => {
    




    return (
        <div className="bg-cover bg-no-repeat rounded-xl md:w-full h-full md:h-[32.5rem] mt-8 py-16" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#131313',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="lg:w-11/12 mx-auto flex flex-col justify-center items-center text-center  space-y-4">
            <img className='sm:w-56 sm:h-48' src={banner} alt="" />
                <h1 className="font-bold text-2xl sm:text-4xl text-white fontSora">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-gray-400 inter  text-xl sm:text-2xl">Beyond Boundaries Beyond Limits</p>
            </div>
            <div className="flex justify-center mt-4 ">
                <div className='banner-btn p-1 rounded-xl'>
                <button onClick={incrementCoins} className="bg-[#E7FE29] px-8 py-1 rounded-xl text-[#131313] text-xl font-semibold">Claim Free Credit</button>
               
                </div>
            </div>

        </div>
    );
};

export default Banner;