export class Intern{
    id:number;
    name:string;
   
    email:string;
    mobile:string;
    city:string;
    domain:string;
    salary:number;

    constructor(id, name,  email, mobile, city, domain, salary){
        this.id = id;
        this.name=name;
       
        this.email=email;
        this.mobile=mobile;
        this.city=city;
        this.domain=domain;
        this.salary=salary;
    }

}