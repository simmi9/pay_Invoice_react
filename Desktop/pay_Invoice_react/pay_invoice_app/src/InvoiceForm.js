import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';  

export const InvoiceForm =({ amount, amountEditable, name, card, expiryDate, securityCode, zip, payInvoice, editAmount, handleChangeAmount, handleChangeName,
handleChangeCardNumber}) => {
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
							  	<input type="text" value={amount} onChange={handleChangeAmount}/>  
							  </div>
						  	: <div></div>
						   }    
					 </label>  
					</div>

					 <label className="holder-name-label"> Name on card
					 <input type="text" value={name} onChange={handleChangeName} className="holder-name-input"/>    
					 </label>

					 <label className="holder-card-label"> Card number   
					 <input type="text" value={name} onChange={handleChangeCardNumber} className="holder-card-input"/>      
					 </label>

				 </form>   
				</div>  
			)

	};  