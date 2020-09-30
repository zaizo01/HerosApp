import React from 'react'
import { HerosList } from '../Heros/HerosList'

export const DcPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">DC Heros</h1>
            <HerosList publisher='DC Comics' />
        </div>
    )
}
