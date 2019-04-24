import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GitdataService {

  private client_id= 'Iv1.f920692b67fe8346';
  private client_secret = 'd08022b75fab3acd47ba4dc1cb71e9d680c9a46f';
  constructor( private http: HttpClient ) { 
    console.log("seervice is serving");
  }

  getUser(input){
    return this.http.get('https://api.github.com/users/'+input+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
     
  }

  getRepos(input){
    return this.http.get('https://api.github.com/users/'+input+'/repos'+'?client_id='+this.client_id+'&client_secret='+this.client_secret);
    
  }
}
