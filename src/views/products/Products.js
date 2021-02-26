import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        } 
    }
    fetchData(){
        axios.get(`http://localhost:8000/api/product`)
        .then(res => {
            const products = res.data.data;
            this.setState({products});
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Product List
                    <div className="float-sm-right">
                        <button className="btn btn-sm btn-success">New</button>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.product_name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>
                                        <Link to={"/products/"+product.id} className="btn btn-sm btn-success">Detail</Link>
                                        <Link to="/products" className="btn btn-sm btn-warning">Edit</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}