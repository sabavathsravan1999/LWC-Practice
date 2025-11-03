import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExpone extends NavigationMixin(LightningElement) {
    naviagetToRecordPage(event) {
        const refPage = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '001WU00001McJMGYA3',
                objectApiName: 'Account',
                actionName: 'view'
            }
        }
        this[NavigationMixin.Navigate](refPage);

    }
    naviagetToObjectPage(event) {
        const refPage = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: '__Recent'
                // filterName:'AllAccounts'

            }
        }
        this[NavigationMixin.Navigate](refPage);

    }
    naviagetToWebPage(event) {
        const refPage = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.youtube.com/@zerotologicbysravan'
            }
        }
        this[NavigationMixin.Navigate](refPage);

    }
    naviagetToRecordRelationshipPage(event) {
        const refPage = {
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '001WU00001A0Da7YAF',
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        }
        this[NavigationMixin.Navigate](refPage);

    }

    naviagetToCreateRecordObjectPage(event) {
        const refPage = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: 'Phone=897854685,BillingState=Telanaga'
            }
        }
        this[NavigationMixin.Navigate](refPage);
    }
    naviagetToEditRecordPage(event) {
        const refPage = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '001WU00001A0Da7YAF',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        }
        this[NavigationMixin.Navigate](refPage);
    }
}
