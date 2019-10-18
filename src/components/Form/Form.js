import React from 'react';
import Axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "",
            productName: "",
            price: 0
        }
    }

    universalInput(property, value) {
        this.setState({
            [property]: value
        });
    };

    postProduct(product) {
        Axios
        .post("http://localhost:4000/api/products", product)
        .then(response => {
            this.setState({
                allProducts: response.data
            });
        })
        .catch(err => console.log(err));
    }
    
    render() {
        const {
            imageURL,
            productName,
            price
        } = this.state;
        return(
        <form className="uploadProductForm" onSubmit={e => {
            e.preventDefault();
            this.props.postProduct({
                imageURL,
                productName,
                price
            });
            this.setState({
                imageURL: "",
                productName: "",
                price: 0
            });
        }}>
        <p className="form-box">
            <label>Image URL:</label>
            <input value={imageURL} onChange={(e) => this.universalInput("imageURL", e.target.value)} />
            <label>Product Name:</label>
            <input value={productName} onChange={(e) => this.universalInput("productName", e.target.value)} />
            <label>Price:</label>
            <input value={price} onChange={(e) => this.universalInput("price", e.target.value)} />
        </p>
        <p className="add-to-inventory"><button>Add to Inventory</button></p>
        </form>
        )
    } 
};