import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ToastEventExample extends LightningElement {

    showSuccessToast(event){
        const evn=new ShowToastEvent({
            title:'Success Toast',
            message: 'this is the Success Toast Event',
            variant:'success',
            mode:'dismissable' 

        });
        this.dispatchEvent(evn);
    }
    showErroToast(event){
        const evn=new ShowToastEvent({
            title:'Error',
            message:'This is the Errro Toast',
            variant:'error',
            mode:'dismissable'
        });
        this.dispatchEvent(evn);
    }
}
