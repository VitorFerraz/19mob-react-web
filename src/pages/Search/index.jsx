import React, { useState } from 'react';
import axios from 'axios';

import Item from './components/Item';

const Search = () => {
    const [results, setResults] = useState([]);

    const onSearch = (event) => {
        const { value } = event.currentTarget;

        if (value.length <= 3) return;

        axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${value}`)
            .then(({ data }) => {
                const { results } = data;
                setResults(results);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const renderItems = () => results.map(({ id, title, price }) => 
        <Item 
            key={ id } 
            id={ id } 
            title={ title } 
            price={ price } 
        />)

    return (<div>
        <input type="text" onChange={ onSearch } />
        
        <div>
            { renderItems() }
        </div>
    </div>);
}

export default Search;