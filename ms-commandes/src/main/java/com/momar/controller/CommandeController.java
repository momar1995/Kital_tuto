package com.momar.controller;

import com.momar.DTO.ProduitDTO;
import com.momar.entities.Commande;
import com.momar.repositories.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Date;
import java.util.List;

@RestController @CrossOrigin("*")
public class CommandeController {
    @Autowired
    private CommandeRepository commandeRepository;

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/Commande")
    public List<Commande> GetAllCommandes(){
        return commandeRepository.findAll();
    }

    @GetMapping("/Commande/{id}")
    public Commande GetCommandeById(@PathVariable(value = "id") Long id){
        return commandeRepository.findById(id).get();
    }

    @GetMapping("/Commande/detail/{id}")
    public ProduitDTO GetCommandeDetailById(@PathVariable(value = "id") Long id){
        return restTemplate.getForObject("http://localhost:8081/Produit/{id}", ProduitDTO.class, id);
    }



    @PostMapping("/Commande")
    public Commande SaveCommande(@Validated @RequestBody Commande commande){
        commande.setDateCommande(new Date());
        return commandeRepository.save(commande);
    }

    @PutMapping("/Commande/{id}")
    public Commande UpdateCommandeById(@PathVariable(value = "id") Long id, @Validated @RequestBody Commande newcommande){
        Commande commande = commandeRepository.findById(id).get();
        commande.setMontantTotal(newcommande.getMontantTotal());
        commande.setQuantite(newcommande.getQuantite());

        return commandeRepository.save(commande);
    }

    @DeleteMapping("/Commande/{id}")
    public String DeleteCommandeById(@PathVariable(value = "id") Long id){
        commandeRepository.deleteById(id);
        return "commande supprimé !";
    }
}
