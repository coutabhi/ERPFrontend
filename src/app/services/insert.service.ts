import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserComponent } from '../components/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  private readonly BASE_URL: string = 'http://localhost:8081';

  private readonly ADMIN: string = `${this.BASE_URL}/api/v1/admin`;
  private readonly FACULTY: string = `${this.BASE_URL}/api/v1/faculty`;
  private readonly LIBRARIAN: string = `${this.BASE_URL}/api/v1/librarian`;

  constructor(private http:HttpClient) { }


  // Admin Services

  public loginAdmin(admin:UserComponent):Observable<object>{
    return this.http.post(`${this.ADMIN}/login`,admin);
  }

  public addAdmin(admin:UserComponent):Observable<object>{
    return this.http.post(`${this.ADMIN}/login`,admin);
  }


  // Student Services

  addStudent(data:any){
    return this.http.post(`${this.BASE_URL}/addstudent`, data);
  }

  viewStudent(){
    return this.http.get(`${this.BASE_URL}/viewstudent`);
  }

  updateStudent(value:any){
    return this.http.post(`${this.BASE_URL}/updatestudent`, value);
  }

  deleteStudent(data:any){
    return this.http.post(`${this.BASE_URL}/deletestudent`, data);
  }

  loginStudent(data2:any){
    return this.http.post(`${this.BASE_URL}/loginstudent`, data2);
  }

  public loginUserFromRemote(user:UserComponent):Observable<object>{
    console.log(user);
    return this.http.post(`${this.BASE_URL}/loginstudent`,user);
  }


  // Faculty Services

  addFaculty(data:any){
    return this.http.post(`${this.FACULTY}/add`, data);
  }
  viewFaculty(){
    return this.http.get(`${this.FACULTY}/view`);
  }
  updateFaculty(value:any){
    return this.http.post(`${this.FACULTY}/update`, value);
  }
  deleteFaculty(data:any){
    return this.http.post(`${this.FACULTY}/delete`, data);
  }

  public loginFaculty(faculty:UserComponent):Observable<object>{
    console.log(faculty);
    return this.http.post(`${this.FACULTY}/login`,faculty);
    
  }


  // Branch Services

  addBranch(data:any){
    return this.http.post(`${this.BASE_URL}/addbranch`, data);
  }
  viewBranch(){
    return this.http.get(`${this.BASE_URL}/viewbranch`);
  }
  deleteBranch(data:any){
    return this.http.post(`${this.BASE_URL}/deletebranch`, data);
  }


  addNotify(data:any){
    return this.http.post(`${this.BASE_URL}/addnotify`, data);
  }
  viewNotify(){
    return this.http.get(`${this.BASE_URL}/viewnotify`);
  }
  deleteNotify(data:any){
    return this.http.post(`${this.BASE_URL}/deletenotify`, data);
  }


  addFees(data:any){
    return this.http.post(`${this.BASE_URL}/addfees`, data);
  }
  viewFees(){
    return this.http.get(`${this.BASE_URL}/viewfees`);
  }
}
