import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { espacioo } from 'src/app/models/espacioo';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new-espacio',
  templateUrl: './new-espacio.component.html',
  styleUrls: ['./new-espacio.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm!:FormGroup;
  color = "accent";

  constructor(
    private fb:FormBuilder,
    private employeeService:EmployeeService,
    private router:Router,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      estacionamiento:['',[Validators.required, Validators.maxLength(10)]],
      piso:['',[Validators.required, Validators.email]],
      numero:['',[Validators.required]],
      estado:['',[Validators.required, Validators.maxLength(10)]],
    })
  }

  saveespacio(){
    
    const espacioo: espacio={
      id:0,
      estacionamiento:this.myForm.get('estacionamiento')?.value,
      piso:this.myForm.get('piso')?.value,
      numero:this.myForm.get('numero')?.value,
      estado:this.myForm.get('estado')?.value,
    };

    this.employeeService.addEmployee(espacioo)
        .subscribe({
          next: (data)=>{
            this.snackBar.open("Registro OK",'',{
              duration:3000,
            })
            this.router.navigate(['/espacioo']);
          },
          error:(err)=>{
            console.log(err);
          }
        })
  }
}
