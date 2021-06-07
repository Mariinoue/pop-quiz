alert("Oi! Bem-Vindx ao Pop Quiz!");

let name = prompt("Insira um nickname:");
document.getElementById("name").innerHTML = "Oi @"+name+"!";

let startGame = prompt("Vamos Jogar, "+ name +"? \n 1. Bora! \n 2. Nao to afim :(")
    if (startGame = 1) {
        let questionOne = prompt("A qual banda de rock que o cantor britânico Fred Mercury pertenceu? \n 1. Queen \n 2. King \n 3. Prince")
        let questionTwo = prompt("Na animação de Toy Story, qual o nome do personagem que é dono dos brinquedos?\n 1. Woody \n 2. Andy \n 3. Buzzlightyear")
        let questionThree = prompt("Como e o nome do melhor amigo do Bob Esponja? \n 1. Lula Molusco \n 2. Sandy \n 3. Patrick Estrela")
    } else if (startGame = 2){
        alert("Tudo bem... A gente te entende!")
}

    let answerOne = "1"
    let answerTwo = "2"
    let answerThree = "3"

    //Pergunta 1
    if(questionOne == answerOne) {
        document.getElementById("answerOne").innerHTML = "Resposta 1"+answerOne
    } else {document.getElementById("answerWrongOne").innerHTML ="Resposta erradaa"}

    //Pergunta 2
    if(questionTwo == answerTwo) {
        document.getElementById("answerTwo").innerHTML = "Resposta 2"
    } else {document.getElementById("answerWrongTwo").innerHTML ="Resposta errada 2"}

    //Pergunta 3
    if(questionThree == answerThree) {
        document.getElementById("answerThree").innerHTML = "Resposta 3"
    } else {document.getElementById("answerWrongThree").innerHTML ="Resposta errada 3"}
