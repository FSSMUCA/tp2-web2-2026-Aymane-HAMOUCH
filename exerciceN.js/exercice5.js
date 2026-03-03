const nombre = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0] ;
for (const valeur of nombre ) {
    let affichage = valeur + '->' ;
    if (Number.isNaN(valeur)){
       affichage += 'INVALIDE' ;
        
    } else if (valeur === Infinity || valeur === -Infinity){
         affichage += 'INFINI' ;
    } else if (1 / valeur === -Infinity ) {
         affichage += 'ZERO NEGATIF' ; 
    } else if (Number.isInteger(valeur)){
        if (Number.isSafeInteger(valeur)){
            affichage +=  'ENTIER SUR' ;
        } else {
            affichage += 'ENTIER HORS LIMITES' ;
    }
        } else {
            affichage += 'DECIMAL' ;
        }

console.log(affichage);
    }