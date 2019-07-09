import React, {Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import {InvoiceForm} from './InvoiceForm';
import * as serviceWorker from './serviceWorker';

export class Invoice extends React.Component {

	state = {
		loading:false,
		fields:{ amount:500,   
				 name:'', 
				 card:'', 
				 expiryDate:'', 
				 securityCode:'', 
				 zip:''}, 
		amountEditable:false, 
		errors:{} ,
    formValid: false,   
	};

	handleValidation = () =>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+?(\s)[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "FirstName LastName";
           }    
        }

        if(!fields["card"]){
           formIsValid = false;
           errors["card"] = "Cannot be empty";
        }

        if(!fields["expiryDate"]){
           formIsValid = false;
           errors["expiryDate"] = "Cannot be empty";
        }

        if(!fields["securityCode"]){
           formIsValid = false;
           errors["securityCode"] = "Cannot be empty";
        }

        if(!fields["zip"]){
           formIsValid = false;
           errors["zip"] = "Cannot be empty";
        }  

        if(typeof fields["card"] !== "undefined"){
           if(!fields["card"].match(/^[0-9]+$/)){
              formIsValid = false;
              errors["card"] = "Only Numbers";  
           }         
        } 


        if(typeof fields["expiryDate"] !== "undefined"){              
	     	const validMonths = [1,2,3,4,5,6,7,8,9,10,11,12];  
	     	const maxYear = 26;
	        let expiryDate = fields['expiryDate'].split('/');
	        let validMonth;
	        let validYear;
	          validMonths.forEach(month => {
	          	if(month !== 10||11||12) {
	          		const appendedMonth=`0${month}`;
	          	if(expiryDate[0] === appendedMonth){
	          		validMonth = true;  
	          	}}
	          	else{
	          		if(expiryDate[0] === month){  
	          		validMonth = true;  
	          	}
	          	}
	          });

	         let year = Number(expiryDate[1]);
	         if(year <= maxYear){
	         	validYear = true;  
	         }

	         if(!validMonth || !validYear){
	         	 errors["expiryDate"] = "Invalid expiry date"; 
	         }
	    }        
       this.setState({errors: errors});   
       return formIsValid;   
	}


   invalidMessage = (field, textbox) => {
    textbox.preventDefault();  

   	let fields = this.state.fields;
   	let errors = {};  

   	 if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+?(\s)[a-zA-Z]+$/)){
              errors["name"] = "FirstName LastName";
           }  
        }

     if(typeof fields["card"] !== "undefined"){
           if(!fields["card"].match(/^[0-9]+$/)){
              errors["card"] = "Only Numbers";  
           }      
        }
    
     if(typeof fields["expiryDate"] !== "undefined"){              
     	const validMonths = [1,2,3,4,5,6,7,8,9,10,11,12];  
     	const maxYear = 26;
        let expiryDate = fields['expiryDate'].split('/');
        let validMonth;
        let validYear;
          validMonths.forEach(month => {
          	if(month !== 10||11||12){
          		const appendedMonth=`0${month}`;
          	if(expiryDate[0] === appendedMonth){
          		validMonth = true;  
          	}}
          	else{
          		if(expiryDate[0] === month){  
          		validMonth = true;  
          	}
          	}
          });

         let year = Number(expiryDate[1]);
         if(year <= maxYear){
         	validYear = true;  
         }

         if(!validMonth || !validYear){
         	 errors["expiryDate"] = "Invalid expiry date"; 
         }
    }
   
    this.setState({errors: errors});   

   	if(field === 'name'){     
   		if(this.state.errors['name']){  
   		 textbox.target.setCustomValidity(this.state.errors['name']);          
   		} else {
   		textbox.target.setCustomValidity(''); 	
   		}
    } 

    if(field === 'card'){      
    	  if(this.state.errors['card']) {
   		 	textbox.target.setCustomValidity(this.state.errors['card']);     
   		 } else {
   		 	textbox.target.setCustomValidity(''); 
   		 }    
    }  

    if(field === 'expiryDate'){      
    	 if(this.state.errors['expiryDate']) {
   		 	textbox.target.setCustomValidity(this.state.errors['expiryDate']);     
   		 } else {  
   		 	textbox.target.setCustomValidity(''); 
   		 }    
    } 

   }     


	payInvoice = (event) => {
  
		 event.preventDefault();

        if(this.handleValidation()){ 
           this.setState({formValid:true});  
           setTimeout(function(){ alert("Form submitted")},50);  
           return;  
        }   
	}

	handleChange = (field,event) => {   
   this.setState({formValid:false}); 
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
							 handleChange={this.handleChange}
							 errors={this.state.errors}
							 invalidMessage= {this.invalidMessage}
               formValid={this.state.formValid}>  
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
