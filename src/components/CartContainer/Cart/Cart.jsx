import React, { useEffect, useState } from 'react';
import PlayerCart from '../../PlayerCart';

const Cart = ({handleSelectedPlayer}) => {
    const [players, setPlayers]= useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    } ,[])
   
    return (
        <div>
            <div>
                <div className='mb-5 mt-5'>
                    <h2 className=' container mx-auto font-bold text-xl sm:text-2xl text-[#131313] fontSora'>Available Players</h2>
                    </div>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 px-1'>
                    {
                        players.map((player,idx) => <PlayerCart
                        handleSelectedPlayer={handleSelectedPlayer}
                        player={player}
                        key={idx}
                        ></PlayerCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;