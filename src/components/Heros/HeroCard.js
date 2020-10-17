import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}) => {
    return (
        
        <div className="flex flex-wrap max-w-md m-6 overflow-hidden bg-white border rounded-lg shadow-lg">
            <div className="w-1/3 bg-cover">
                <img src={ `./assets/heroes/${ id }.jpg` } alt={ superhero }/>
            </div>
            <div className="w-2/3 p-6 my-auto">
                <h3 className="text-2xl font-semibold">{superhero}</h3>
                <p>{ alter_ego }</p>
                {
                    ( alter_ego !== characters )
                        && <p>{ characters }</p>
                }
                <p>{ first_appearance }</p>
                <Link to={ `./hero/${ id }` }>
                   <button className="px-8 py-3 mt-4 font-semibold text-white bg-black rounded-md hover:bg-gray-900"> More... </button>
                </Link>
            </div>
        </div>
    )
}


