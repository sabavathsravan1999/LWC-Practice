import { LightningElement } from 'lwc';

export default class IncreasedecreasebuttonsChild extends LightningElement {
    currentValue=0;
    onclickIncHandle(){
        this.currentValue=this.currentValue+1;
        this.todispacteventmethod();
        
    }
    onclickDecHandle(){
        if(this.currentValue>0){
            this.currentValue=this.currentValue-1;
            this.todispacteventmethod();
        }else{
            alert('no negitive values allowed');
        }
        
 
    }
    todispacteventmethod(){
        const evn=new CustomEvent('changevalue', {
            detail: this.currentValue
        });
        this.dispatchEvent(evn);
        console.log('this is the current value '+this.currentValue)
    }
    
}
