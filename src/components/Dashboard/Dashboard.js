import React from 'react';
import Product from '../Product/Product';

export default class Dashboard extends React.Component {
    render() {
        var { mappedProducts } = inventory.map(product => {
            return (
                <div key={inventory.product}>
                    <div className="products">

                    </div>
                </div>
            )
        })
        return(
            <div className="grid">{mappedProducts}</div>
        )
    }
};