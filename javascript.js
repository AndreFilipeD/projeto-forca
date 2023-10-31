var selectedWord
let forcatext = window.document.querySelector("#forcatext")
var categAnimal = ['alce','avestruz','babuino','cachorro','coelho','cabra','cegonha','elefante','foca','flamingo','gato','gorila','girafa','iguana','jaguar','javali','kiwi','lagartixa','macaco','mamute','ornitorrinco','porco','quati','rato','raposa','ratazana','sapo','sardinha','texugo','urso','urubu','vaca','veado','vibora','zebra']
var winChars = []
var splitChars = []

function newgame(){
    selectedWord = categAnimal[Math.floor(Math.random() * categAnimal.length)].toUpperCase();
    splitChars = selectedWord.split("")
    for(c of selectedWord){
        winChars.push(0)
        forcatext.innerHTML += '_ '
    }
}

function action(str){
    winChars = selectedWord.split("")
    window.alert(splitChars)
    window.alert(winChars)
    /*
    for(c of selectedWord){
        window.alert(selectedWord[c])
    }
    */
}
    /*forcatext.innerHTML = ''//Limpa texto visual
    for(var c of selectedWord){//Percorre toda palavra
        if(winChars[c]==='_'){//Verifica se já foi encontrado
            if(str===selectedWord[c]){//Verifica se é a letra correta
                winChars[c]=str//Adiciona nova letra na memória
                forcatext.innerHTML += str+' '//Escreve nova letra descoberta
            }else{//Caso nova letra não seja correta
                forcatext.innerHTML +='_ '//Adiciona espaço visual em branco
            }
        }else{//Caso já tenha sido encontrado
            forcatext.innerHTML += winChars[c]//Mostre a letra na memória
        }
    }*/
