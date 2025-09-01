import { LightningElement } from 'lwc';

export default class IncreaseDecreaseParent extends LightningElement {
    currentcount=0;
    handleValueChange(event){
        this.currentcount=event.detail;
        console.log('this is parent data'+this.currentcount+ ' this is event dtail value '+event.detail);

    }
}
