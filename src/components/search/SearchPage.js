import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../Heros/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchPage = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    
    const herosFilter = useMemo(() => getHeroByName( q ), [ q ])
    const { searchText } = formValues;
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`)
    }

    return (
        <div className="flex flex-wrap justify-between w-full">
            <div className="w-1/2 text-xl font-semibold ">
                <h3>Search Hero</h3>
                <div className="pt-3">
                    <form onSubmit={ handleSearch }>
                        <input  className="p-2 px-5 pr-20 bg-gray-200 border-2 border-gray-400 rounded-lg outline-none focus:border-gray-500"
                                placeholder="Search..."
                                name="searchText"
                                value={ searchText }
                                onChange={ handleInputChange }
                        />
                        <button className="px-6 py-2 ml-3 font-semibold text-white bg-black rounded-md hover:bg-gray-800 text-md">Search</button>
                    </form>
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

                 {
                    (q === '')
                        &&
                    <div className="w-full p-3 mt-2 text-center bg-green-500 rounded-md animate__animated animate__backInRight">
                        <p className="text-white">Search a Hero</p>
                    </div>
                 }


                 {
                    (q !=='' && herosFilter.length === 0 )
                        &&
                    <div className="w-full p-3 mt-2 text-center bg-red-600 rounded-md animate__animated animate__backInRight">
                        <p className="text-white">There is no a Hero with name { q }</p>
                    </div>
                 }
            </div>
        </div>
    )
}
