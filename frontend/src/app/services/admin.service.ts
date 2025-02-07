import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Admin } from '../interfaces/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _httpClient = inject(HttpClient);
  
  private URL_ADMINS = 'http://3.138.68.225:9000/Admin';

  constructor() { }


  postAdmins(admin :Admin){
    return this._httpClient.post(this.URL_ADMINS + '/crear', admin)

  }

  getUsuarios(){
    return this._httpClient.get(this.URL_ADMINS + '/obtener')
  }

}
