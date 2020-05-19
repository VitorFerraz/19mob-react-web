import React from 'react';

import { Link } from 'react-router-dom';

const Content = ({ id, title, price }) => (
    <div key={ `key-${id}` }>
        <span>{ id }</span>
        <span>{ title }</span>
        <span>{ price }</span>
        <Link to={ `/product/${id}` }>Link do botão</Link>
    </div>
);

export default Content;