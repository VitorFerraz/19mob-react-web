import React from 'react';

import Button from '../../../components/Button/index';

const Content = ({ thumbnail, title, price }) => (
    <div className="container">
        <img src={ thumbnail.replace('-I', '-O') } />
        <div className="content">
            <h1 className="title">{ title }</h1>
            <div className="price">R$ { price }</div>
            <Button label="Comprar" />
        </div>
    </div>
);

export default Content;