const { heroes } = require('../data/heroes');

export const getHeroByid = ( id ) => {
    
    return heroes.find( hero => hero.id === id );
}