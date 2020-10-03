import React from 'react'
import { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HerosList = ({ publisher }) => {

    const heros = useMemo(() => getHeroByPublisher( publisher ), [ publisher ]);

    return (
            <div className="flex flex-wrap justify-center animate__animated animate__fadeIn">
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
