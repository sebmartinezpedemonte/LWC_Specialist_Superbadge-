import { LightningElement } from 'lwc';
import BOATMC from '@salesforce/messageChannel/BoatMessageChannel__c'
 // imports
 export default class BoatSearch extends LightningElement {
    isLoading = false;
    selectedBoatTypeId= '';
    
    // Handles loading event
    handleLoading() {
      this.isLoading = true;
     }
    
    // Handles done loading event
    handleDoneLoading() {
      this.isLoading = false;
     }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
      this.selectedBoatTypeId = event.detail.boatTypeId;
     }
    createNewBoat() { }
  }