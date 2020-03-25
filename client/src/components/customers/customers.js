import React, {Component} from 'react';
import './customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers:[]
        }
    }

    componentDidMount() { // runs automatically when component is mounted
        fetch('/api/customers') // fetches customers from express server and sets `state`-value to customers that were fetched
            .then(res => res.json())
            .then(customers => this.setState({customers}, (customers) => console.log("Customers fetched...", customers)))
    }

    render() {
        return (
            <div>
                Customers   
            </div>
        );
    }
}

export default Customers;