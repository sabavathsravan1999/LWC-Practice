import { LightningElement, } from 'lwc';
import insertAccountContact from '@salesforce/apex/accContcreationlwctoapexclass.insertAccountContact';
export default class AccContcreationlwctoapex extends LightningElement {
    accountName='';
    lastname='';
    handlelonchange(event){
        this[event.target.name]=event.target.value;

    }
    onclickHandle(event){
        insertAccountContact({accountName:this.accountName, lastname:this.lastname })
        .then( result => {
            this.lastname='';
            this.accountName='';
            alert('Account and contact has been created Account Id->'+result.accountId+' ContactId->'+result.contactId);
        })
        .catch(error =>{
            console.log('error occured');
            alert('an error occured while creating');

        });

    }
    handlerest(event){
        this.accountName='';
        this.lastname='';
    }

}
