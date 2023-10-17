let nome = "Homem-Aranha"
let XP = 7800
let nivel = ""

if(XP<1000){
    nivel = "Ferro"
}
else if(XP>1000 && XP<=2000){
    nivel = "Bronze"
}
else if(XP>2000 && XP<=5000){
    nivel = "Prata"
}
else if(XP>6000 && XP<=7000){
    nivel = "Ouro"
}
else if(XP>7000 && XP<=8000){
    nivel = "Platina diamante"
}
else if(XP>8000 && XP<=9000){
    nivel = "Ascendente"
}
else if(XP>9000 && XP<=10000){
    nivel = "imortal"
}
else{
    nivel = "Radiante"
}

console.log("O herói de nome " + nome + " está no nível de " + nivel + ".") 