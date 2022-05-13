package com.momar.controller;

import com.momar.entities.Produit;
import com.momar.repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController @CrossOrigin("*")
public class ProduitController {

    @Autowired private ProduitRepository produitRepository;

    @GetMapping("/Produit")
    public List<Produit> GetAllProduits(){
        return produitRepository.findAll();
    }

    @GetMapping("/Produit/{id}")
    public Produit GetProduitById(@PathVariable(value = "id") Long id){
        return produitRepository.findById(id).get();
    }

    @PostMapping("/Produit")
    public Produit SaveProduit(@Validated @RequestBody Produit produit){
        return produitRepository.save(produit);
    }

    @PutMapping("/Produit/{id}")
    public Produit UpdateProduitById(@PathVariable(value = "id") Long id, @Validated @RequestBody Produit newproduit){
        Produit produit = produitRepository.findById(id).get();
        produit.setDescription(newproduit.getDescription());
        produit.setLibelle(newproduit.getLibelle());
        produit.setPrixU(newproduit.getPrixU());

        return produitRepository.save(produit);
    }

    @DeleteMapping("/Produit/{id}")
    public String DeleteProduitById(@PathVariable(value = "id") Long id){
        produitRepository.deleteById(id);
        return "produit supprimé !";
    }
}
