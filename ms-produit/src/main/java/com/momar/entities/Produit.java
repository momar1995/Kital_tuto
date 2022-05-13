package com.momar.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Produit implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdProduit;

    private String libelle;
    private Long prixU;
    private String description;

    public Long getIdProduit() {
        return IdProduit;
    }

    public void setIdProduit(Long idProduit) {
        IdProduit = idProduit;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Long getPrixU() {
        return prixU;
    }

    public void setPrixU(Long prixU) {
        this.prixU = prixU;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
