import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroByid } from '../../selectors/getHeroByid';

export const HerosPage = ({ history }) => {
    
    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroByid( heroeId ), [ heroeId ])
    
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
        <div className="pt-12">
            <div className="flex w-full overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="w-1/2 bg-cover">
                <div className="h-56">
                    <img src={ `../assets/heroes/${ heroeId }.jpg` } alt={ superhero } className="bg-cover animate__animated animate__fadeInLeft"/>
                </div>
                </div>
                <div className="w-1/2 p-6 my-auto">
                    <h3 className="text-4xl font-semibold">{ superhero }</h3>
                    <ul className="text-xl">
                        <li><p className="font-semibold">Alter ego:</p> { alter_ego }</li>
                        <li><p className="font-semibold">Publisher:</p> { publisher }</li>
                        <li><p className="font-semibold">Frist appearance:</p> { first_appearance }</li>
                        <li><p className="font-semibold">Characters:</p> { characters }</li>
                    </ul>
                    <button className="px-16 py-4 mt-5 font-semibold text-white bg-black rounded-md hover:bg-gray-800"
                            onClick={ handleReturn }
                            >Back</button>
                </div>
            </div>
        </div>
    )
}
