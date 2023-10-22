//Calculadora de Partidas Rankeadas//
let vitoria = 51
let derrota = 30
let nivel = " "
    
   function  Rankeadas ( vitoria, derrota){
    nivel = vitoria - derrota
    return nivel
   }
   

    
    if( nivel <=10){
        nivel = "ferro"
    }

    else if( nivel >=11 && nivel <=20 ){
        nivel = "bronze"
    }

    else if(nivel >=21 && nivel <=50){
        nivel = "prata"
    }

    else if( nivel >=51 && nivel <=80){
        nivel = "ouro"
    }

    else if(nivel >=81 && nivel <=90){
        nivel = "Diamante"
    }

    else if(nivel>=91 && nivel <= 100){
        nivel = "lendario"
    }

    else if(nivel >=101){
        nivel = "imortal"

    }
     console.log("O heroi tem de saldo de vitoria " + vitoria + " esta no nivel de " + nivel)
    
    