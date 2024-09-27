import React, { Component } from 'react'

class Quantity extends Component {
    constructor() {
        super();
        // this.increment = this.increment.bind(this);
        this.state = {
            productdata: {
                count: 1,
                title: "Samsung s24 ultra",
                price: 1500,
                stock: 7
            },
            alertdata: {
                alerttext: "",
                alertstyle: ""
            }
        }
    }

    increment = () => {
        if (this.state.productdata.count < this.state.productdata.stock) {
            this.setState({
                productdata: {
                    title: "Samsung s24 ultra",
                    price: 1500,
                    stock: 7,
                    count: this.state.productdata.count + 1
                }
            })
        } else {
            this.setState({
                alertdata: {
                    alertstyle: "alert alert-danger",
                    alerttext: "stock out"
                }
            })
        }
    }
    decrement = () => {
        if (this.state.productdata.count > 1) {
            this.setState({
                productdata: {
                    title: "Samsung s24 ultra",
                    price: 1500,
                    stock: 7,   
                    count: this.state.productdata.count - 1
                }
            })
        }
    }
    render() {
        return (
            <div>
                <p className={this.state.alertdata.alertstyle}>{this.state.alertdata.alerttext}</p>
                <h3>{this.state.productdata.title}</h3>
                <h4>Price:${this.state.productdata.price * this.state.productdata.count}</h4>
                <button className='btn btn-danger' onClick={this.decrement}>-</button>
                <span className='mx-3'>{this.state.productdata.count}</span>
                <button className='btn btn-success' onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Quantity