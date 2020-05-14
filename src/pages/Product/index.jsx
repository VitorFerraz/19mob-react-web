import React from 'react';
import './style.css'
import axios from 'axios';

class Product extends React.Component {
    
    constructor(props) { 
        super(props)
        this.state = { 
            id: props.match.params.id,
            data: {
                id: null
            }
        }
    }

    componentDidMount() { 
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`).then(({data}) => { 
            console.log(data)
            this.setState({data});
        })
    }

    state = {
        item: {}
    }

    render() {
        return (
        <div>
            <h1>Página de produto</h1>
            <div className="product">
                <div className="product-image">
                    <img src="https://static.carrefour.com.br/medias/sys_master/images/images/h09/h91/h00/h00/15080883879966.jpg" alt="Produto"/>
                </div>
                <div className="product-detail">
                    <h2>Produto Nome</h2>
                    <h1>R$0,00</h1>
                    <button className="btn-cart">Comprar Agora</button>
                    <button className="btn-cart">Adicionar ao carrinho</button>
                </div>
            </div>
            <div className="product-description">
            <h2>Descrição</h2>
            </div>
        </div>
        );
    }
}

export default Product;