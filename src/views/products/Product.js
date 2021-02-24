import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        } 
    }
    
    componentDidMount() {
        axios.get(`http://localhost:8000/api/product/1`)
            .then(res => {
                const products = res.data.data;
                this.setState({ products });
            })
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Product Detail
                </div>
                <div className="card-body">
                    dđ
                </div>
            </div>
        )
    }
}