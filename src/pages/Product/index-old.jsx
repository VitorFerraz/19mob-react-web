import React from 'react';
import axios from 'axios';

import Loading from '../../components/Loading';

import Content from './components/Content';

import './style.css';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loading: true,
            data: null,
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`)
            .then(({ data }) => {
                this.setState({ data, loading: false });
            })
    }

    renderContent() {
        const { thumbnail, title, price } = this.state.data;
        return <Content thumbnail={ thumbnail } title={ title } price={ price } />;
    }

    render() {
        const { data, loading } = this.state;

        return (<div className="page-product">
            <Loading show={ loading } />
            { data && this.renderContent() }
        </div>);
    }
}

export default Product;