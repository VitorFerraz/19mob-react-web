import React from 'react';
import axios from 'axios';

import Button from '../../components/Button/index';
import Loading from '../../components/Loading/index';

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
        return (
            <div className="container">
                <img src={ thumbnail.replace('-I', '-O') } />
                <div className="content">
                    <h1 className="title">{ title }</h1>
                    <div className="price">R$ { price }</div>
                    <Button label="Comprar" />
                </div>
            </div>
        );
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