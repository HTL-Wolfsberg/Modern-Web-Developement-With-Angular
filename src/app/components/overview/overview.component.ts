import { Component } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  
  save(){
    saveAs("assets/Modern Web Developement with Angular.docx", "Modern Web Developement with Angular by Patrick Fritzl");    
  }
}
