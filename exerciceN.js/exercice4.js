console.log(`0== ""      ->  ${0==""} |    0 ===""  -> ${0===""}   `) ;
console.log(`0== "0"      ->  ${0=="0"} |    0 ==="0"  -> ${0==="0"}   `) ;
console.log(`0== false    ->  ${0==false} |    0 === false  -> ${0===false}   `) ;
console.log(` ""== false      ->  ${ ""==false} |    "" === false  -> ${""===false }   `) ;
console.log(`null== undefined      ->  ${null==undefined} |    null === undefined  -> ${null===undefined}   `) ;
console.log(`null== false      ->  ${null==false} |    null ===false  -> ${null=== false}   `) ;
console.log(`NaN== NaN      ->  ${NaN==NaN} |    NaN === NaN  -> ${NaN===NaN}   `) ;
console.log(` 1== "1"      ->  ${1=="1"} |     ==="1"  -> ${1==="1"}   `) ;
console.log(`" \t\n "== 0     ->  ${" \t\n "== 0} |    " \t\n " === 0  -> ${" \t\n "===0}   `) ;

console.log(`---`) ;
  
const paires = [[0, ""],[0, "0"],[0, false],["", false],[null, undefined],[null, false], [NaN, NaN],[1, "1"],[" \t\n ", 0] ] ;
let compteur=0 ;
paires.forEach(([valeur1, valeur2]) => {
    const resultatdoubleEgal = (valeur1 == valeur2) ? "true" : "false";
    const resultat_tripleEgal = (valeur1 === valeur2) ? "true" : "false";
    
    if ((valeur1 == valeur2) !== (valeur1 === valeur2)) {
        compteur ++ ;
    }
    
    
    const strValeur1 = String(valeur1).padEnd(8, ' ');
    const strValeur2 = String(valeur2).padEnd(8, ' ');
    
    console.log(`${strValeur1} == ${strValeur2} -> ${resultatdoubleEgal}    |   ${strValeur1} === ${strValeur2} -> ${resultat_tripleEgal}`);
});
console.log(`${compteur} paire(s) où == et === donnent des résultats différents`);