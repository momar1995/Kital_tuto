import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../entities/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  private ApiUrl = environment.CommandeUrl;

  getAllCommande(): Observable<any>{
    return this.http.get(this.ApiUrl);
  }
  
  getCommandeById(id: number): Observable<any>{
    return this.http.get(this.ApiUrl + "/" + id);
  }

  getCommandeDetailById(id: number): Observable<any>{
    return this.http.get(this.ApiUrl + "/detail/" + id);
  }
  
  saveCommande(commande: Commande): Observable<any>{
    return this.http.post(this.ApiUrl, commande);
  }

  updateCommande(id: number, commande: Commande): Observable<any>{
    return this.http.put(this.ApiUrl + "/" + id, commande);
  }

  deleteCommande(id: number): Observable<any>{
    return this.http.delete(this.ApiUrl+ "/" + id, { responseType: "text" });
  }
}
