import React from 'react';
import Product from '../Product/Product';
import Axios from 'axios';

export default class Dashboard extends React.Component {
    render() {
        var { mappedProducts } = inventory.map(product => {
            return (
                <div key={inventory.product}>
                    <div className="products">

                    </div>
                </div>
            )
        });
        deleteProduct() {
            Axios
            .delete("http://localhost:4000/api/products/:id")
            .then(response => {
                this.setState({
                    inventory: response.data
                });
            })
            .catch(err => console.log(err));
        }
        return(
            <div className="grid">{mappedProducts}</div>
        )
    }
};