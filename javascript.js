var selectedWord
var forcatxt = window.document.querySelector("#forcatext")
var forcaelement = window.document.querySelector("#forca")
var categAnimal = ['alce','avestruz','babuino','cachorro','coelho','cabra','cegonha','elefante','foca','flamingo','gato','gorila','girafa','iguana','jaguar','javali','kiwi','lagartixa','macaco','mamute','ornitorrinco','porco','quati','rato','raposa','ratazana','sapo','sardinha','texugo','urso','urubu','vaca','veado','vibora','zebra']
var winChars = []
var splitChars = []
var missKey = []
var life = 7
var winTurn = false
var alreadyMiss = false
var score = 0
var keySelect

function newgame(){
    
    winChars = []// Resetando variaveis
    winTurn = false
    damageLock = false
    alreadyMiss = false
    forcatxt.innerHTML = ''
    life=7
    score = 0
    // Escolhendo palavra aleatóriamente
    selectedWord = categAnimal[Math.floor(Math.random() * categAnimal.length)].toUpperCase();
    splitChars = selectedWord.split("")//Cortando caracteres da palavra escolhida
    for(c of selectedWord){winChars.push('_');forcatxt.innerHTML += '_ ';}/* Desenhando tabuleiro */
    forcaUpdate()//Atualizando imagem da forca
    cleanGraphics()
}

function action(str){//Ação do jogador
    winTurn = false
    alreadyMiss = false
    forcatxt.innerHTML = ''
    score = 0 //resetando avaliadores
    if(missKey.indexOf(str)!=-1){//se a letra já foi selecionada
        //window.alert('Já foi selecionado')
        winTurn=true
        for(c in splitChars){forcatxt.innerHTML += winChars[c]+' ';if(winChars[c]!='_'){score++}}
    }else{//se a letra ainda não foi selecionada
        missKey.push(str)//torne a letra já selecionada
        
        for(c in splitChars){//para cada posição em splitChar:
            if(winChars[c]==='_'&&str===splitChars[c]){//se winChar = _ e letra select = letra da palavra
                winChars[c]=str//substitua letra da posição por letra selecionada
                winTurn=true//se já nao estiver ganhando, esteja agora!
            }
            forcatxt.innerHTML += winChars[c]+' ';if(winChars[c]!='_'){score++}
        }
    }
    
    //window.alert('Score:'+score+'| Need:'+selectedWord.length+'| Palavra:'+ selectedWord+'Life:'+life)
    if(winTurn===false){life--;forcaUpdate();}//Caso erre a letra, perca vida
    if(life<1){//se a vida zerar, perde
        window.alert('Você perdeu, a palavra era: '+selectedWord+', seu bobo, Iniciando novo jogo!')
        newgame()
    }
    if(score >= selectedWord.length){//se a pontuação for maior igual a tamanho da palavra, ganha
        window.alert('Você ganhou, descobriu: '+selectedWord+', seu bom, Iniciando novo jogo!')
        newgame()
    }
    /*diferença entre in e of,
    in retorna numero "indice" para a variavel;
    of retorna elemento para a variavel*/
    addGraphics()
}
function forcaUpdate(){//Atualizando imagem forca
    forcaelement.setAttribute('src','img/lifes/liv'+life+'.svg')
}

function addGraphics(){
    for(c of missKey){
        keySelect = window.document.querySelector(".ke"+c)
        if(selectedWord.indexOf(c)>-1){
            keySelect.style='background-color:#00aa69c9;'
        }else{
            keySelect.style='background-color:#5a2c2cd8;'
        }
    }
}
function cleanGraphics(){//vc é um genio, vc é um genio, parabéns
    for(c of missKey){
        //window.alert(".ke"+c)
        keySelect = window.document.querySelector(".ke"+c)
        keySelect.style=""
    }
    missKey=[]
}
