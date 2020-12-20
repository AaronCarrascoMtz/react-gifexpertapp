import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //     categories , setCategories  | categories value = ['One Punch'];
    const [categories, setCategories] = useState(['Rick and Morty'])

    // const handleAdd = () => {
    //     const newCategory = categories.concat('Naruto');
    //     setCategories(newCategory);
    //     setCategories( ['HunterXHunter', ...categories] );
    //      setCategories( cats => [ ...cats, 'HunterXHunter'] );
    // }

    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
