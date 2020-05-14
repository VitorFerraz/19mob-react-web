import React from 'react';
import axios from 'axios';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            data: {
                id: null
            },
        }
    }

    componentDidMount() {
        axios.get(`https://api.mercadolibre.com/items/${this.state.id}`)
            .then(({ data }) => {
                this.setState({ data });
            })
    }

    render() {
        console.log('data', this.state.data);
        return (<div>
        </div>);
    }
}

export default Product;