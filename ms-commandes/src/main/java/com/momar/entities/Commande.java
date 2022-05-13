package com.momar.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Commande implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdCommande;

    @JsonFormat(pattern = "dd-MM-yyyy HH:mm")
    private Date dateCommande;

    private Long idProduit;

    private int quantite;

    private Long montantTotal;

    public Long getIdCommande() {
        return IdCommande;
    }

    public void setIdCommande(Long idCommande) {
        IdCommande = idCommande;
    }

    public Date getDateCommande() {
        return dateCommande;
    }

    public void setDateCommande(Date dateCommande) {
        this.dateCommande = dateCommande;
    }

    public Long getIdProduit() {
        return idProduit;
    }

    public void setIdProduit(Long idProduit) {
        this.idProduit = idProduit;
    }

    public int getQuantite() {
        return quantite;
    }

    public void setQuantite(int quantite) {
        this.quantite = quantite;
    }

    public Long getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(Long montantTotal) {
        this.montantTotal = montantTotal;
    }
}
