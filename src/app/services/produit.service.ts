import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../entities/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  private ApiUrl = environment.ProduitUrl;

  getAllProduit(): Observable<any>{
    return this.http.get(this.ApiUrl);
  }
  
  getProduitById(id: number): Observable<any>{
    return this.http.get(this.ApiUrl + "/" + id);
  }

  saveProduit(produit: Produit): Observable<any>{
    return this.http.post(this.ApiUrl, produit );
  }

  updateProduit(id: number, p: Produit): Observable<any>{
    return this.http.put(this.ApiUrl + "/" + id, p);
  }

  deleteProduit(id: number): Observable<any>{
    return this.http.delete(this.ApiUrl+ "/" + id, { responseType: "text" });
  }

}
