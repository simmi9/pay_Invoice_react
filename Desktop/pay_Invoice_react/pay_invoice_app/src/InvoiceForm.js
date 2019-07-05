import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';  

export const InvoiceForm =({ amount, amountEditable, name, card, expiryDate, securityCode, zip, payInvoice, editAmount, handleChange}) => {
		return(
				<div className="invoice-form">
				 <form onSubmit={payInvoice}>  
				 	<div className="amount-container">    
					  <label className="amount-label"> Payment Amount
					  <div className="amount-container-level1">
						  <label className="amount-label-sign"> $ </label>  
						  <label className="amount-input"  className="amount-label-value"> {amount} </label> 
						  <button type="submit" onClick={editAmount}  className="amount-edit-button"> edit </button>
					   </div>
						   {amountEditable?
							  <div className="editable-field-amount">
							  	<input type="text" value={amount} onChange={handleChange.bind(this,'amount')}/>     
							  </div>
						  	: <div></div>
						   }    
					 </label>  
					</div>

					 <label className="holder-name-label"> Name on card
					 	<input type="text" value={name} onChange={handleChange.bind(this,'name')} className="holder-name-input"/>        
					 </label>

					 <label className="holder-card-label"> Card number   
					 	<input type="text" value={card} onChange={handleChange.bind(this,'card')} className="holder-card-input"/>        
					 </label>

					 <button type="submit"> Pay {amount}.00 </button>   

				 </form>   
				</div>  
			)

	};  