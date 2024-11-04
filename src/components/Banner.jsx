import bg from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'
import '../index.css'
const Banner = () => {
    return (
        <div className="bg-cover bg-no-repeat rounded-xl md:w-full h-full md:h-[32.5rem] mt-8 py-16" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#131313',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="lg:w-11/12 mx-auto flex flex-col justify-center items-center text-center  space-y-4">
            <img className='w-56 h-48' src={banner} alt="" />
                <h1 className="font-bold text-4xl text-white fontSora">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-gray-400 inter text-2xl">Beyond Boundaries Beyond Limits</p>
            </div>
            <div className="flex justify-center mt-4 ">
                <button className="btn boxShadow border-none text-white text-xl font-semibold">Explore Now</button>
            </div>

        </div>
    );
};

export default Banner;