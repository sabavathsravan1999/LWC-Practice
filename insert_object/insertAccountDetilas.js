import { LightningElement } from 'lwc';
import insertAccountDetailActivity from '@salesforce/apex/insertAccountdetailsController.insertAccountDetailActivity';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class InsertAccountDetilas extends LightningElement {
    
    account={
        Name:'',
        Email:'',
        Phone:''
    }
    onchangeHandler(event){
        const fileds=event.target.name;
        this.account[fileds]=event.target.value;

    }
    onclickHandler(event){
        console.log(this.account.Email +' '+this.account.Name+' '+this.account.Phone);
        //as soosn as i click thi sav ebutton this handler works
        // this has to send the data to controller and it has to insert the data and return the boolean value her after insert
        insertAccountDetailActivity({account:this.account})
            .then( result => {
                this.dispatchEvent(new ShowToastEvent({
                    title:'Suceess',
                    message:'Id-> '+result+' inserted',
                    variant:'success',
                    mode:'dismissable'
                }) );
            })
            .catch( error =>{
                this.dispatchEvent(new ShowToastEvent({
                    title:'Faild',
                    message:'Insertion faild',
                    variant:'error',
                    mode:'dismissable'
                }) );
                console.log('error is '+error);
            });
    }
}
