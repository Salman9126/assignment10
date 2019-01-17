import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'assignment10';
  status: boolean = false;
  mapped:any;

  

  public emp_hire_date:any;
  public employee = new Employee('','','','','','','','','');

  ngOnInit() {
    this.emp_hire_date = new Date();
  }

  onSubmitted(){

    this.status = true;
    this.mapped = Object.entries(this.employee).map(([type, value]) => ({type, value}));
    console.log(this.mapped);
  }
}
