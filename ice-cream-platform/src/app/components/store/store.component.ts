import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css', '../../../assets/styles/nicepage.css']
})
export class StoreComponent {

  constructor(private router: Router) {
    
  }

  submitStore(forms: any) {
    console.log(forms)
    let store = forms.text
    console.log(store)
    this.router.navigate(['clients-search/clients-listing'],{queryParams: {searchType: 'store', searchValue: store}}).then(() => {window.location.reload();});
  }

  log(x: any) {
    console.log(x)
  } 

}
