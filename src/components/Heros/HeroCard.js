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
        
        <div className="flex flex-wrap max-w-md bg-white shadow-lg border rounded-lg overflow-hidden m-6">
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
                   <button className="bg-black hover:bg-gray-900 py-3 px-8 text-white font-semibold rounded-md mt-4"> More... </button>
                </Link>
            </div>
        </div>
    )
}


