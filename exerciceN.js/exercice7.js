let nomProduit = "Clavier mécanique" ;
let prix = 89.99 ;
let quantite = 3 ;
let codePromo = null ;
let reductionPourcentage = 10 ;
let estMembre = true;
let soldeCompte = 250 ;
let SousTotal = prix * quantite ;
console.log(`===== RÉCAPITULATIF =====`);
console.log(`Produit : ${nomProduit}`);
console.log(`Qauntite : ${quantite}`);
console.log(`Prix unit: ${prix} MAD `);
console.log(`Sous-total : ${ SousTotal.toFixed(3)} MAD`);
// apliquer une reduction.
let reduction = 0 ;
if (codePromo !== null && estMembre === true) {
    reduction = (sousTotal * reductionPourcentage) / 100;
    console.log(`Reduction :${reduction} MAS`);
} else {
    console.log(`Reduction : 0 MAS`);
}
// calcul total final .
total = SousTotal - reduction ;
console.log(`Total : ${total.toFixed(3)} MAD`);
// traitement de paiment .
if (soldeCompte >= total){
    console.log( ' Statut : Paiment accepte')
} else{
    console.log('Statut : Paiment refusé ')
}
// si le paiment acceptes on va calculer solde .
if(soldeCompte>=total){
    let solde = soldeCompte - total ;
    console.log(`Solde : ${solde.toFixed(3)} MAD`) ;
}
console.log(`==============================`);
