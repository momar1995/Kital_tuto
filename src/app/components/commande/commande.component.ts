import { Component, OnInit } from '@angular/core';
import { Commande } from 'src/app/entities/commande';
import { Produit } from 'src/app/entities/produit';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  commandeDetail!: Produit;
  ListeCommandes!: Commande[];
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.getAllCommandes();
    this.ListeCommandes = [];
    this.commandeDetail = new Produit();
  }

  getAllCommandes() {
    this. commandeService.getAllCommande().subscribe(reponse => {
      console.log(reponse);
      this.ListeCommandes = reponse;
      
    }, erreur=> console.error(erreur));
  }

  detailCommande(id: number) {
    this.commandeService.getCommandeDetailById(id).subscribe(reponse => {
      console.log(reponse);
      this.commandeDetail = reponse;
      //afficher le modal
      ($("#detailcommande") as any).modal("show");
    })
  }

  deleteCommande(id: number) {
    let r = confirm("Confirmez-vous la suppression ?");
    if (r) {
      this. commandeService.deleteCommande(id).subscribe(reponse => {
        console.log(reponse);
        this.getAllCommandes();
        alert("commande supprimée !");
      }, erreur=> console.error(erreur));
    
    }
  }

}
