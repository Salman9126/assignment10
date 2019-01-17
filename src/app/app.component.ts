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

  public emp_first_name:string;
  public emp_last_name:string;
  public emp_title:string;
  public emp_dept:string;
  public emp_rank:string;
  public emp_rank_detail:string;
  public sup_first_name:string;
  public sup_last_name:string;

  public emp_hire_date:any;
  public employee = new Employee('','','','','','','','','');

  ngOnInit() {
    this.emp_hire_date = new Date();

  }

  onSubmitted(){
    
    this.employee.emp_first_name = this.emp_first_name;
    this.employee.emp_last_name = this.emp_last_name;
    this.employee.emp_hire_date = this.emp_hire_date;
    this.employee.emp_title = this.emp_title;
    this.employee.emp_dept = this.emp_dept;
    this.employee.emp_rank = this.emp_rank;
    this.employee.emp_rank_detail = this.emp_rank_detail;
    this.employee.sup_first_name = this.sup_first_name;
    this.employee.sup_last_name = this.sup_last_name;   

    this.status = true;
    this.mapped = Object.entries(this.employee).map(([type, value]) => ({type, value}));
    console.log(this.mapped);
  }
}
