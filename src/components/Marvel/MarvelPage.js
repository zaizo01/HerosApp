import React from 'react'
import { HerosList } from '../Heros/HerosList'

export const MarvelPage = () => {

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Marvel Heros</h1>
            <HerosList publisher='Marvel Comics'/>
        </div>
    )
}
