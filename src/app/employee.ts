export class Employee {
    constructor(
        public emp_first_name:string,
        public emp_last_name:string,
        public emp_hire_date:any,
        public emp_title:string,        
        public emp_dept:any,
        public emp_rank:any,
        public emp_rank_detail:any,
        public sup_first_name:string,
        public sup_last_name:string
    )
    {
        this.emp_first_name= emp_first_name;
        this.emp_last_name= emp_last_name;
        this.emp_hire_date= emp_hire_date;
        this.emp_title= emp_title;
        this.emp_dept= emp_dept;
        this.emp_rank= emp_rank;
        this.emp_rank_detail= emp_rank_detail;
        this.sup_first_name= sup_first_name;
        this.sup_last_name= sup_last_name;        
    }
}
