import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { espacio } from '../models/espacioo';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getespacioo() {
    return this.http.get<espacio[]>(this.basePath);
  }

  addespacioo(employee: espacio){
    return this.http.post<espacio>(this.basePath, employee);
  }

  updateespacioo(id:any,employee: espacio){
    return this.http.put<espacio>(`${this.basePath}/${id}`, employee);
  }


  deleteespacioo(id:any){
    return this.http.delete<espacio>(`${this.basePath}/${id}`)
  }
}
