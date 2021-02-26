import React from 'react';
import axios from 'axios';
export default class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: {
                id:'',
                product_name:'',
                price:'',
                quantity: ''
            },
            clickEdit : true,
            txtEditCancel : 'Edit'
        }
        this.editClick = this.editClick.bind(this)
        this.fetchData = this.fetchData.bind(this)
    }
    fetchData(){
        let id= this.props.match.params.id.toString()
        const url = `http://localhost:8000/api/product/${id}`
        axios.get(url)
            .then(res => {
                const product = res.data.data;
                this.setState({ product });
            })
    }
    editClick() {
        this.setState(state => ({
            clickEdit: !state.clickEdit,
            txtEditCancel:state.clickEdit?'Cancel':'Edit'
        }));

        //console.log(this.state.product);
    }
    componentDidMount(){
        this.fetchData()
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Product Detail 
                    <div className="float-sm-right">
                        <button className="btn btn-sm btn-danger" onClick={this.editClick}>{this.state.txtEditCancel}</button>
                    </div>
                </div>
                <div className="card-body">
                    <ProductDetail productDetail={this.state.product} clickEdit = {this.state.clickEdit}></ProductDetail>
                </div>
            </div>
        )
    }
}
class ProductDetail extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col col-sm-6">
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name='product_name' className="form-control" value={this.props.productDetail.product_name} onChange={e => this.handChange(e)} readOnly={this.props.clickEdit}/>
                    </div>
                </div>
                {/* <div className="col col-sm-6">
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" className="form-control" value={product.price} readOnly={this.props.clickEdit}/>
                    </div>
                </div>
                <div className="col col-sm-6">
                    <div className="form-group">
                        <label>Quantity</label>
                        <input type="number" className="form-control" value={product.quantity} readOnly={this.props.clickEdit}/>
                    </div>
                </div> */}
            </div>  
        )
    }
}