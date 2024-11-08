import React from 'react';

const PlayerCart = ({player,handleSelectedPlayer}) => {
    const {playerId,name,country,image,role,price,leftHandBat,ratings} = player
    return (
        <div>
            
            <div className='border-2 p-4 rounded-lg '>
                <img className='w-full h-full object-cover rounded-lg' src={image} alt="" />

                <div className='flex gap-x-2 mt-6'>
                    <span><i className="text-[#131313CC] fa-solid fa-user"></i></span>
                    <h3 className='font-bold text-[#131313CC]'>{name}</h3>
                </div>

                <div className='flex justify-between items-center gap-2 mt-3'>
                    <div className='flex items-center gap-2'>
                        <span><i className="fa-solid fa-flag text-[#8f8484]"></i></span>
                        <p className='text-[#817777] font-medium'>{country}</p>              
                    </div>
                    <p className='bg-slate-200 px-4 py-1 rounded-md border-1 text-[#615a5a] font-medium'>{role}</p>
                </div>
                    <div className='divider'></div>

                    <div className='space-y-4'>
                     <div className='flex justify-between items-center'>
                     <h3 className='font-bold'>Ratings: </h3>
                     <p>{ratings}</p>
                     </div>
                     <div className='flex justify-between'>
                     <p className='font-bold'>Left-Hand-Bat</p>
                     <p className='text-[#615a5a] font-medium'>Left-Hand-Bat</p>
                     </div>

                     <div className='flex justify-between items-center'>
                        <h3 className='font-bold'>Price: {price}</h3>
                        <button 
                        onClick={()=> handleSelectedPlayer(player)}
                        className='btn'>Choose Player</button>
                     </div>
                    </div>

            </div>
        </div>
    );
};

export default PlayerCart;