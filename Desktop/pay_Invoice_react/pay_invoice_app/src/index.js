import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import {InvoiceForm} from './InvoiceForm';
import * as serviceWorker from './serviceWorker';

export class Invoice extends React.Component {

	state = {
		loading:false,
		fields:{ amount:500, name:'', card:'', expiryDate:'', securityCode:'', zip:''}, 
		amountEditable:false, 
		errors:{}    
	};


	payInvoice = () => {
		setTimeout(function() {}, 50);
	}

	handleChange = (field,event) => {    
		let fields = this.state.fields;
        fields[field] = event.target.value;        
        this.setState({fields});    
	}

  	editAmount = (event) => {
  		this.setState(prevState => ({
			amountEditable: !prevState.amountEditable  
		}));
		event.preventDefault();  
    }  

	//using Component Life Cycle Methods
	async componentDidMount() {
		this.setState({loading:true});
		//let req = await fetch('');
		//let resJson = await req.json();
	     setTimeout(function() {}, 50);
	    this.setState({loading:false });
	}

	componentDidUpdate() {
			console.log("The component just updated")
		}

	render() {
		return (
			<section className="pay_invoice_container">
				<div className="pay_invoice_header">
					<span> Pay Invoice </span>
				</div>
				<InvoiceForm amount={this.state.fields['amount']} 
							 amountEditable={this.state.amountEditable}
							 name={this.state.fields['name']}
							 card= {this.state.fields['card']}
							 expiryDate={this.state.fields['expiryDate']}
							 securityCode={this.state.fields['securityCode']}
							 zip={this.state.fields['zip']}
							 editAmount={this.editAmount}
							 payInvoice={this.payInvoice}
							 handleChange={this.handleChange}>
				</InvoiceForm>  
			</section>
			)
	}
}

ReactDOM.render(<Invoice />, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
