import React from 'react'
import { heroes } from '../../data/heroes';
import { HeroCard } from '../Heros/HeroCard';
export const SearchPage = () => {

    const herosFilter = heroes;
    

    return (
        <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/2 text-xl font-semibold ">
                <h3>Search Hero</h3>
                <div className="pt-3">
                    <input  className="p-2 px-5 pr-20 bg-gray-200 border-2 border-gray-400 rounded-lg focus:border-gray-500" placeholder="Search..."
                    />
                    <button className="px-6 py-2 ml-3 font-semibold text-white bg-black rounded-md hover:bg-gray-800 text-md">Search</button>
                </div>
            </div>
            <div className="w-1/2 text-xl font-semibold">
                <h3 className="pl-6">Results</h3>
                {
                    herosFilter.map( hero => (
                        <HeroCard 
                        key={ hero.id }
                        { ...hero }
                        />
                    ))
                }
            </div>
        </div>
    )
}
