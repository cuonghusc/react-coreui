import React from 'react'
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
           data: []
        }
    };
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Add New Product 
                    <div className="float-sm-right">
                        <Link to={"/product"} className="btn btn-sm btn-primary">Back</Link>
                    </div>
                </div>
                <div className="card-body">
                    
                </div>
            </div>
        );
    }
}
