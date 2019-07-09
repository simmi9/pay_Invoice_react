import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faQuestion } from '@fortawesome/fontawesome-free-solid';
import $ from 'jquery';  

export const InvoiceForm =({ amount, amountEditable, name, card, expiryDate, securityCode, zip, payInvoice, editAmount, handleChange,errors,invalidMessage}) => {
		return(
			<div className="invoice-form">
				<form onSubmit={payInvoice}>  
				 	<div className="amount-container">    
					  <label className="amount-label"> Payment Amount
						  <div className="amount-container-level1">
							  <label className="amount-label-sign"> $ </label>  
							  <label className="amount-input"  className="amount-label-value"> {amount} </label> 
							  <button type="submit" onClick={editAmount}  className="amount-edit-button"> Edit </button>
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
					 <input type="text" value={name}  onChange={handleChange.bind(this,'name')} onInput={invalidMessage.bind(this,'name')} 
					  className="holder-name-input"
					   required/>                                      
					</label>
	   
					<label className="holder-card-label"> Card number   
					 	<input type="text" value={card} minlength="16" onChange={handleChange.bind(this,'card')} onInput={invalidMessage.bind(this,'card')}  
					 	className="holder-card-input" required/>        
					</label>  

					<div className="expiry_security_container">
						<label className="holder-card-expiry-label">  Expiry date 
						 	<input  type="textT"   
						 			value={expiryDate} 
						 			placeholder='MM/YY'
						 			pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"  
						 			onChange={handleChange.bind(this,'expiryDate')} 
						 			onInput={invalidMessage.bind(this,'expiryDate')}  
						 			className="holder-card-expiry-input" 
						 			required/>        
						</label> 

						<label className="holder-card-security-label"> Security code   
						 	<input type="text" 
						 		   value={securityCode} 
						 		   minlength="3" 
						 		   onChange={handleChange.bind(this,'securityCode')} 
						 	       onInput={invalidMessage.bind(this,'securityCode')}  
						 	       className="holder-card-security-input" 
						 	       required/>        
						</label> 
					</div>

					<label className="holder-zip-label"> Security code   
						<input type="text" 
							   value={zip} 
							   minlength="6" 
							   onChange={handleChange.bind(this,'zip')} 
							   onInput={invalidMessage.bind(this,'zip')}  
							   className="holder-card-zip-input" 
							   required/>        
					</label> 

					<div className="submit-form-button-container">    
					 <button type="submit" className="submit-form-button"> Pay {amount}.00 </button>
					</div> 
				</form>   
			</div>  
			)

	};  