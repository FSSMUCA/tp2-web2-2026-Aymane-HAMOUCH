let nom = "   Fatima   " ;
let age = "23"  ;
let email = "fatima@example" ;
let scoreJeu = "150pts" ;
let estAdmin = "false" ;
let derniereConnexion = null ;
let nombreConnexions = "0"  ;
console.log(`================Rapport Utilisateur=============`);
 // 1er : pour le nom :
 let nomCorrige = nom.trim() ;
   if(nomCorrige === ""){
           nomCorrige = 'Invalide'
   }
 // 2em : pour l'age :
   let CorigeAge = parseInt (age,10);
   let ageValide = !isNaN(CorigeAge) && CorigeAge > 0 ;
   
   // 3em : pour l'email :
let emailValide = email.includes("@") && email.includes("." , email.indexOf("@" + 1 )) ;

  // 4em traitement pour scorejeu :
  let scoreJeuValide = parseInt(scoreJeu,10) ;
  if(isNaN(scoreJeuValide)){
    scoreJeuValide = 0 ;
  }

// 5em traitement pour l'admin :
let estAminValide = estAdmin === "true" ;

// 6em traitement de connexion :
 let dernierConnexionValide = derniereConnexion ?? 'jamais connecte ' ;

// 7em traitement de nombre de connexion :
let nombreConnexionsValide = parseInt(nombreConnexions, 10);
let affichageConnexions = nombreConnexionsValide === 0 ? "Aucune connexion" : nombreConnexionsValide;

console.log(`nom : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age : ${age} ( ${ (ageValide ? "Valide" : 'valeur invalide')} )`) ;
console.log(`email : ${email} ${emailValide ? " (valide ) " : " (invalide : pas de point après @)  "} `) ;
console.log(`scoreJeu : ${scoreJeuValide} (extrait depuis : "${scoreJeu}")`);
console.log(`estAdmis : ${estAminValide} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniere connexion : "${dernierConnexionValide}" (valeur par défaut via ??)`);
console.log(`nombreConnexion : "${affichageConnexions}" (0 après conversion)`);
