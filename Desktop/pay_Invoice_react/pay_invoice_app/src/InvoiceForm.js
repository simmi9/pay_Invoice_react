import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';           
import { library }  from '@fortawesome/fontawesome-svg-core'; 
import { faQuestionCircle, faLock, faLockOpen} from '@fortawesome/fontawesome-free-solid';         
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   

library.add(faQuestionCircle);  

export const InvoiceForm =({ amount, amountEditable, name, card, expiryDate, securityCode, zip, payInvoice, editAmount, handleChange,errors,invalidMessage,formValid}) => {
		return(
			<div className="invoice-form">  
				<form onSubmit={payInvoice}>  
				 	<div className="amount-container">    
					  <label className="amount-label"> Payment Amount
						  <div className="amount-container-level1">
							  <label className="amount-label-sign"> $ </label>  
							  <label className="amount-input"  className="amount-label-value"> {amount} </label> 
							  		<button type="submit" 
							          		onClick={editAmount}  
							          		className="amount-edit-button"> Edit 
							  		</button>
						   </div>
								   {amountEditable?
									  <div className="editable-field-amount">  
									  	<input type="text" 
									  	       value={amount} 
									  	       onChange={handleChange.bind(this,'amount')}/>     
									  </div>  
								  	: <div></div>  
								   }    
					  		 </label>     
					</div>

					<label className="holder-name-label"> Name on card
					 <input type="text" 
					        value={name}  
					        onChange={handleChange.bind(this,'name')} 
					        onInput={invalidMessage.bind(this,'name')} 
					        className="holder-name-input"
					        required/>                                        
					</label>
	   
					<label className="holder-card-label"> Card number   
					 	<input type="text" 
					 	       value={card} 
					 	       maxLength="16" 
					 	       onChange={handleChange.bind(this,'card')} 
					 	       onInput={invalidMessage.bind(this,'card')}  
					 	       className="holder-card-input" 
					 	       title="FirstName LastName"
					 	       required/>        
					</label>  

					<div className="expiry_security_container">
						<label className="holder-card-expiry-label">  Expiry date 
						 	<input  type="text"   
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
						 		   placeholder='&#xF059;'
						 		   minLength="3" 
						 		   maxLength="4"
						 		   pattern="[0-9]{3,4}"  
						 		   onChange={handleChange.bind(this,'securityCode')} 
						 	       onInput={invalidMessage.bind(this,'securityCode')}  
						 	       className="holder-card-security-input" 
						 	       placeholder='&#xF059;'
						 	       title='3 or 4 digit number on your card'
						 	       required/>         
						</label>    
					</div>

					<label className="holder-zip-label"> ZIP/Postal code   
						<input type="text" 
							   value={zip} 
							   placeholder='&#xF059;'  
							   minLength="6" 
							   pattern="[ABCEGHJ-NPRSTVXY abceghj-nprstvxy]\d[ABCEGHJ-NPRSTV-Z abceghj-nprstv-z][ -]?\d[ABCEGHJ-NPRSTV-Z abceghj-nprstv-z]\d"  
							   onChange={handleChange.bind(this,'zip')} 
							   onInput={invalidMessage.bind(this,'zip')}  
							   className="holder-card-zip-input" 
						 	   title='Applicable to Canadian ZIP Code only ex: M2N7A1'
							   required/>        
					</label> 

					<div className="submit-form-button-container">    
					 <button type="submit" 
					 		 className="submit-form-button" 
					 		 title="Lock opens when form is successfully submitted">
					 {formValid? <FontAwesomeIcon icon="lock-open" className="show-lock"/> : 
					 			 <FontAwesomeIcon icon="lock" className="show-lock"/> 
					 }  
					  Pay ${amount}.00 
					  </button>
					</div> 
				</form>   
			</div>  
			)

	};  