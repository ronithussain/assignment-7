import FooterLogo from '../assets/logo-footer.png'
import backgroundBg from '../assets/bg-shadow.png'
const Footer = () => {
    return (
        <div>
            <div className='container mx-auto relative mt-60 sm:mt-52 '>
                <div className=' borders p-4  position absolute -top-60 md:-top-44 lg:-top-36 lg:left-5'>
                    <div className=' text-center lg:px-52 md:px-20 py-20 rounded-lg  bg-white '
                    style={{
                        backgroundImage: `url(${backgroundBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        }}>
                        <h1 className=" font-bold text-3xl lg:text-4xl text-[#131313] fontSora">Subscribe to our Newsletter</h1>
                        <p className="text-[#131313B3] inter  text-base mt-2">Get the latest updates and news right in your inbox!</p>
                        <div className='mt-4 flex flex-col sm:flex-row gap-3 px-2 sm:px-0'>
                            <input type="text" className="grow input input-bordered" placeholder="Enter your email" />
                            <button className="btn border-none subscribe  join-item text-gray-600 font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer section */}
            <div className=" bg-black mt-4 pt-56 px-2 sm:px-0">
                <div className='flex justify-center items-center mb-16'>
                    <img src={FooterLogo} alt="" />
                </div>
                <footer className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto md:gap-y-5">
                    <div>
                        <h6 className="text-xl font-bold text-white">About Us</h6>
                        <p className="mt-3 w-[80%] text-gray-600 font-medium">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h6 className="text-xl font-bold text-white">Quick Links </h6>
                        <ul className="list-disc ml-5 text-gray-600 font-medium space-y-2 mt-3">
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <form>
                        <h6 className="text-xl font-bold text-white">Newsletter</h6>
                        <fieldset className="form-control mt-2">
                            
                                <span className=" text-gray-600 w-[50%] sm:w-full mb-3">Subscribe to our newsletter for the latest updates.</span>
                         
                            <div className="join flex  md:flex-row sm:px-0">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="sm:input border-none sm:join-item rounded-tl-lg" />
                                <button className="btn border-none subscribe  join-item text-gray-600 font-semibold">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </footer>
                <div className="border-b mt-10 mb-5 border-gray-600"></div>
                <div className="text-center font-medium text-gray-600 pb-5">
                    <p>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;