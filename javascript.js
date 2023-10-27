var selectedWord
let forcatext = window.document.querySelector("#forcatext")
var categAnimal = ['alce','avestruz','babuino','cachorro','coelho','cabra','cegonha','elefante','foca','flamingo','gato','gorila','girafa','iguana','jaguar','javali','kiwi','lagartixa','macaco','mamute','ornitorrinco','porco','quati','rato','raposa','ratazana','sapo','sardinha','texugo','urso','urubu','vaca','veado','vibora','zebra']
var winChars = []

function newgame(){
    winChars = []
    selectedWord = categAnimal[Math.floor(Math.random() * categAnimal.length)].toUpperCase();
    for(var c of selectedWord){
        forcatext.innerHTML +='_ '
    }
    
}
function action(str){
    forcatext.innerHTML = ''
    for(var c of selectedWord){
        if(c === str || winChars.some(c)){
            forcatext.innerHTML += str
            winChars.push(c)
        }else{
            forcatext.innerHTML +='_'
        }
    }
    window.alert(winChars)
}