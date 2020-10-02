import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroByid } from '../../selectors/getHeroByid';

export const HerosPage = ({ history }) => {
    
    const { heroeId } = useParams();

    const hero = getHeroByid( heroeId );
    
    if( !hero ) {
        return <Redirect to='/' />
    }

    const handleReturn = () => {

        if( history.length <=2 ){

            history.push('/');
        }
        else{

            history.goBack();
        }

    }
    
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="flex shadow-lg bg-white rounded-lg overflow-hidden w-4/5">
            <div className="w-1/4 bg-cover">
            <img src={ `../assets/heroes/${ heroeId }.jpg` } alt={ superhero }/>
            </div>
            <div className="w-1/2 p-6 my-auto">
                <h3 className="text-4xl font-semibold">{ superhero }</h3>
                <ul className="text-xl">
                    <li><p className="font-semibold">Alter ego:</p> { alter_ego }</li>
                    <li><p className="font-semibold">Publisher:</p> { publisher }</li>
                    <li><p className="font-semibold">Frist appearance:</p> { first_appearance }</li>
                    <li><p className="font-semibold">Characters:</p> { characters }</li>
                </ul>
                <button className="bg-black hover:bg-gray-800 text-white font-semibold rounded-md py-4 px-16 mt-5"
                        onClick={ handleReturn }
                        >Back</button>
            </div>
            <div></div>
        </div>
    )
}
