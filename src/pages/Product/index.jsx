import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../../components/Loading';

import Content from './components/Content';

import './style.css';

const Product = (props) => {
    const [id] = useState(props.match.params.id);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items/${id}`)
            .then(({ data: resData }) => {
                setData(resData);
                setLoading(false);
            });
    }, []);

    const renderContent = () => {
        const { thumbnail, title, price } = data;
        return <Content thumbnail={ thumbnail } title={ title } price={ price } />;
    }

    return (
        <div className="page-product">
            <Loading show={ loading } />
            { data && renderContent() }
        </div>
    )
}

export default Product;