import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/entities/commande';
import { Produit } from 'src/app/entities/produit';
import { CommandeService } from 'src/app/services/commande.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produit!: Produit;
  produitU!: Produit;
  ListeProduits!: Produit[];
  commande!: Commande;
  
  constructor(private produitService: ProduitService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.produit = new Produit();
    this.produitU = new Produit();
    this.commande = new Commande();
    this.ListeProduits = [];
    this.getAllProduits();
  }

  getAllProduits() {
    this.produitService.getAllProduit().subscribe(reponse => {
      console.log(reponse);
      this.ListeProduits = reponse;
      
    }, erreur=> console.error(erreur));
    
  }
  saveProduit() {
    // fermer le modal
    ($("#newproduit") as any).modal("hide");
    this.produitService.saveProduit(this.produit).subscribe(reponse => {
      console.log(reponse);
      this.produit = new Produit();
      this.getAllProduits();
      alert("produit ajouté !");
    }, erreur=> console.error(erreur));
  }

  updateProduit(id: number) {
    this.produitU = this.ListeProduits.find(p => p.idProduit == id)!;
    // afficher le modal
    ($("#updateProduit") as any).modal("show");
  }
  saveUpdateProduit() {
    ($("#updateProduit") as any).modal("hide");
    this.produitService.updateProduit(this.produitU.idProduit, this.produitU).subscribe(reponse => {
      console.log(reponse);
      this.produitU = new Produit();
      this.getAllProduits();
      alert("produit modifié !");
    }, erreur=> console.error(erreur));
  }
  
  deleteProduit(id: number) {
    let r = confirm("Confirmez-vous la suppression ?");
    if (r) {
      this.produitService.deleteProduit(id).subscribe(reponse => {
        console.log(reponse);
        alert("produit supprimé !");
        this.getAllProduits();
      }, erreur=> console.error(erreur));
      
    }
  }

  commander(id: number, prixU: number) {
    this.commande = new Commande();
    this.commande.idProduit = id;
    this.commande.montantTotal = prixU;
    ($("#newcommande") as any).modal("show");
  }

  saveCommande() {
    ($("#newcommande") as any).modal("hide");
    this.commande.montantTotal *= this.commande.quantite;
    this. commandeService.saveCommande(this.commande).subscribe(reponse => {
      console.log(reponse);
      this.commande = new Commande();
      alert("commande ajoutée !");
    }, erreur=> console.error(erreur));
  }
}
