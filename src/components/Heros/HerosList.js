import React from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HerosList = ({ publisher }) => {

    const heros = getHeroByPublisher( publisher );

    return (
            <div className="flex flex-wrap justify-center">
                {
                    heros.map( hero => (
                        <HeroCard key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
            </div>
    )
}
