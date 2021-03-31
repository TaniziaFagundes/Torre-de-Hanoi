//movimento do jogo e regras
var move;
var coluna;

//funcoes extras 
var movimento = 0;
const movimentos = document.querySelector(".painel")
const vitoria = document.querySelector(".vitoria")
const invalido = document.querySelector(".invalid");
function painel(movimento){
    movimentos.innerHTML = null; //reset inicial
    var mov = document.createElement("h4");
    var conteudo = document.createTextNode(movimento);
    mov.appendChild(conteudo);
    movimentos.appendChild(mov) 
}

function finalJogo(movimento){
    var final = document.createElement("h3");
    var conteudo = document.createTextNode("Parabens!!, você conseguiu finalizar com "+movimento+ " movimentos!!");
    final.appendChild(conteudo);
    vitoria.appendChild(final);
    
}

function jogadaInvalida(){
    var inval = document.createElement("h3");
    var conteudo = document.createTextNode("Jogada Invalida!!!");
    inval.appendChild(conteudo);
    invalido.appendChild(inval);
}

//criar função reset

//fim extras

document.addEventListener("drag",function(event){},false);

document.addEventListener("dragstart",function(event){
    move = event.target;
    
},false);

document.addEventListener("dragover",function(event){
    event.preventDefault();
    
}, false);

document.addEventListener("drop",function(event){
    event.preventDefault();

    //regra inserir apenas acima de um maior
    //console.log(move.id)
    ultimo = event.target.lastChild.id;
    console.log(ultimo)

    if(ultimo == undefined || move.id == "disco1" || 
      (move.id == "disco2" && ultimo == "disco3") ||
      (move.id == "disco2" && ultimo == "disco4")  ||
      (move.id == "disco3" && ultimo == "disco4") ||
      (move.id == "disco4" && ultimo == undefined)){

        //movendo elementos
        if(event.target.className=="movezone" ){
            invalido.innerHTML = null;
            event.target.style.background = "";
            move.parentNode.removeChild(move)
            event.target.appendChild(move);
            movimento+=1
        }
        painel(movimento) //alterando quant movimentos
    }else{
        //implementar front
        jogadaInvalida()
        //console.log("movimento invalido")
    }

    
    

    //testando se jogo foi finalizado após move
    var quantidade = document.getElementById("coluna3");
    if(quantidade.childElementCount == 4){
        //implementar vitoria
       finalJogo(movimento)
    }

    var disco = document.getElementById("coluna1");
    //console.log(disco.lastElementChild.id)

},false);









