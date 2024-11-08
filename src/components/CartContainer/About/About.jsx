import React from 'react';

const About = ({selectedPlayer,handleDelete,handleIsActiveState}) => {
    
    return (
        <div>
            <div className='mb-5 mt-5 sm:px-0 px-1'>
            <h2 className=' container mx-auto font-bold text-xl sm:text-2xl text-[#131313] fontSora'>Selected Players {selectedPlayer.length} /6</h2>
            </div>
           
           {
            selectedPlayer.map((player) => (
                <div className='container mx-auto border-2 p-4 rounded-xl my-4'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 items-center'>
                        <img className='w-20 rounded-lg' src={player.image} alt="" />
                        <div>
                            <h3 className='fontSora font-bold text-2xl'>{player.name}</h3>
                            <p className='fontSora text-[#615a5a] font-medium'>Left-Hand-Bat</p>
                        </div>
                        </div>
                        <button onClick={()=>handleDelete(player.playerId)} className='btn'>Delete</button>

                    </div>
                </div>
            ))
        }
        <div className='container mx-auto '>
        <button onClick={()=>handleIsActiveState('cart')} className='btn bg-[#E7FE29]'>Add More Player</button>
        </div>
          
        </div>
    );
};

export default About;