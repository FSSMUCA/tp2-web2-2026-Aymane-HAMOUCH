let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}] ;

for (let i = 0 ; i < valeurs.length ; i++){
    let a = valeurs[i] ;
    let valeurString = String(a) ;
    let thruOUfals = a ?  "truthly " : "falsy" ; 
    console.log(`${valeurString} -> ${thruOUfals}`);
}
