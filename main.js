var pontos = 0;
var pontosPorClique = 1;
var segundos = 60;
var id;
var questao = 1;



// Jogo1 - Clicker
function iniciarJogo1(){
    start();
    document.getElementById('subtitle1').style.display = 'none';
    document.getElementById('jogo1_elementos').style.display = "block";
    document.getElementById('btnJogo1').style.display = 'none';
    document.getElementById('objetivo').style.display = 'none';
    document.getElementById('tituloClicker').innerHTML = ''; 
}

function iniciarJogo2(){
    document.getElementById('btnJogo2').style.display = 'none';
    document.getElementById('tituloQuiz').style.display = 'none';
    document.getElementById('pergunta').innerHTML = questao + ') Em qual lugar do ranking de maiores produtores de lixo o Brasil se encontra?';
    document.getElementById('opcoes').style.display = 'block';
    document.getElementById('op1').innerText = '4º';
    document.getElementById('op2').innerText = '15º';
    document.getElementById('op3').innerText = '7º';
    document.getElementById('op4').innerText = '23º';
}

function verificarResposta(element){
    
    if(questao == 5){
        document.getElementById('opcoes').style.display = 'none';
        document.getElementById('pergunta').innerHTML = 'Parabéns, você acertou (X) perguntas!';
    }
    

    if(questao < 5){
        switch(questao) {
            case 1:
                if(element.id == 'op1' )
                    console.log('acertou');                      
                break;
        }

        questao++;
        document.getElementById('pergunta').innerHTML = questao + ') Pergunta?';
        document.getElementById('op1').innerText = 'Opção 1';
        document.getElementById('op2').innerText = 'Opção 2';
        document.getElementById('op3').innerText = 'Opção 3';
        document.getElementById('op4').innerText = 'Opção 4';
    }
    
    
}

function start(){
    if(segundos < 1){
        document.getElementById('relogio').style.bottom = '-15vh';
        document.getElementById('relogio').style.fontSize = '30px';
        document.getElementById('relogio').innerHTML = "Tempo esgotado!";
        document.getElementById('jogo1_elementos').style.display = 'none';
        document.getElementById('dica').style.display = 'none';
        document.getElementById('title1').style.background = '#474138';
        $('.powerup').remove();

        document.getElementById('objetivo').innerHTML = 'Você conseguiu ' + pontos + ' pontos! Se cada ponto seu valesse 10000m², terias que ter mais ' 
        + (13000000000 - (pontos * 10000)) + ' pontos para igualar a quantidade de florestas desmatadas no Brasil por ano.';

        document.getElementById('objetivo').style.display = 'block';
        document.getElementById('objetivo').style.bottom = '-50vh';
        document.getElementById('objetivo').style.left = '0%';
        console.log(pontos);
    }else{
        segundos = segundos - 1;
        setTimeout('start()', 1000)
        
        if(segundos < 10){
            document.getElementById('relogio').innerHTML = "0:0" + segundos;
        }else{
            document.getElementById('relogio').innerHTML = "0:" + segundos;
        }  
    }  
    
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
  
function cliquePowerUp(element){
    pontosPorClique += 1;
    document.getElementById('dpq').innerHTML = 'Pontos por clique: ' + pontosPorClique; 
    element.remove();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clicar(){
    pontos += pontosPorClique;
    document.getElementById('cliques').innerHTML = pontos;
    
    if(pontos > 0){
        document.getElementById('pontosloc').innerHTML = "<p id = 'pontos'>+" + pontosPorClique;
        
        //Resetando a animação do CSS
        var elm = document.getElementById('pontosloc');
        var newone = document.getElementById('pontosloc').cloneNode(true);
        elm.parentNode.replaceChild(newone, elm);       
    }

    //Adicionando os powerups
    var powerUp = document.createElement("i");
    powerUp.setAttribute("id", id);
    powerUp.setAttribute("class", "fas fa-spin fa-fire-alt powerup");
    powerUp.setAttribute("Onclick", "cliquePowerUp(this)");
    document.getElementById('sect-jogo1').appendChild(powerUp);
    powerUp.style.left = getRandomInt(22, 75) + "%";
    powerUp.style.bottom = getRandomInt(-30, -70) + "vh";
  
    x = document.getElementsByName("powerup").length;
    id++;
}

function mostrarONGS(){
    document.getElementById('ONGS').style.display = 'block';
    document.getElementById('infoContribua').innerHTML = '';
}
