var selectedWord
var elementToggle
var forcatxt = window.document.querySelector("#forcatext")
var notitext = window.document.querySelector("#notifytext")
var noticont = window.document.querySelector('#notifycontainer')
var forcaelement = window.document.querySelector("#forca")
var validChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var categAnimal = ['alce','avestruz','babuino','cachorro','coelho','cabra','cegonha','elefante','foca','flamingo','gato','gorila','girafa','iguana','jaguar','javali','kiwi','lagartixa','lula','macaco','mamute','ornitorrinco','porco','quati','rato','raposa','ratazana','sapo','sardinha','texugo','urso','urubu','vaca','veado','vibora','zebra']
var categComida = ['alho','açucar','acelga','agua','alface','ameixa','arroz','azeitona','abacate','abobora','beterraba','bife','bolacha','batata','beringela','banana','bolo','biscoito','brigadeiro','cenoura','cebola','castanha','coco','cacau','cereal','cogumelo','couve','creme','crepe','croissant','carne','cafe','doce','donut','damasco','ervilha','espaguete','farinha','frango','frito','farofa','feijao','figo','framboesa','galheto','grelhado','geleia','goiaba','granola','groselha','guarana','gravioli','hibisco','hamburguer','iogurte','jaca','jabuticaba','jilo','kiwi','lagosta','lasanha','laranja','leite','lentilha','limao','linguiça','maça','mandioca','manga','margarina','manteiga','melao','melancia','mel','milho','mamao','nabo','noz','ovo','oleo','palmito','paçoca','pao','peru','pera','pimenta','pimentao','queijo','quiabo','rabanete','risoto','repolho','sal','romate','toranja','uva','vagem','vinagre','vinho','xarope']

var categObjetos = ["abajur",'agulha','alfinete','algema','alicate','almofada','ampulheta','anel','antena','anzol','apagador','apito','apontador','aquecedor','arado','arco','armadura','aro','aspirador','azulejo','bacia','balança','balde','banco','bandeira','bazuca','bengala','berço','berimbau','bicicleta','bigorna','binoculo','bisturi','boia','bola','boneca','borracha','brinco','bule','bumerangue','bussola','cabide','cadeado','cadeira','caderno','cajado','calculadora','calice','campainha','candelabro','caneca','caneta','canivete','capa','capacete','cassete','cassetete','castiçal','celular','chicote','chinelo','chupeta','cinzeiro','clipe','colchao','colher','comando','computador','copo','dado','dardo','delineador','dentadura','desentupidor','desfibrilador','desodorante','despertador','detergente','diamante','dinamite','disco','disquete','dobradiça','drone','dvd','edredom','elastico','envelope','enxada','escada','escopeta','escorredor','escova','escudo','esmalte','espada','espanador','esparadrapo','espelho','espingarda','espiral','esponja','espremedor','esquadro','esteira','estojo','estribo','etiqueta','extintor','faca','fantoche','farol','fax','ferradura','ferro','filmadora','filtro','fio','fita','fivela','flauta','flecha','floreira','focinheira','fogao','foguete','foice','folha','frasco','freezer','frigideira','frigobar','fritadeira','fruteira','funil','furadeira','gaiola','gaita','gancho','gangorra','garfo','garrafa','gaveta','geladeira','gibi','gilete','giz','gorro','grampeador','grampo','granada','gravata','grelha','guardanapo','guilhotina','guitarra','haltere','harpa','haste','hidrante','hidratante','holofote','impressora','inalador','incenso','ingresso','interruptor','isca','isopor','isqueiro','janela','jaqueta','jarra','jarro','jato','jaula','jeans','joelheira','jogo','joia','jornal','joystick','kart','ketchup','lacre','lanceta','lancheira','lantejoula','lanterna','lata','leiteira','lenço','lençol','lente','leque','liquidificador','livro','lixa','lixeira','lona','lousa','luneta','lustre','luva','maçaneta','maçarico','machado','mala','mamadeira','manequim','mangueira','manivela','maquete','marreta','martelo','medalha','megafone','meia','miçanga','microfone','mochila','modem','mola','monitor','motor','mouse','navalha','nave','navio','notebook','ocarina','ouro','palito','pandeiro','panela','pano','papel','parafuso','paraquedas','pedal','peruca','peteca','piano','picareta','piercing','pinça','pincel','pingente','pistola','placa','porteiro','pote','prancha','prateleira','prato','pulseira','punhal','quadro','quepe','quimono','radar','radio','ralador','ralo','rampa','raquete','rasteirinha','ratoeira','rede','remo','repelente','retrovisor','revista','rifle','roda','rodo','rolamento','roleta','rolha','rolo','rotor','sabonete','saco','sacola','saia','saleiro','sanfona','sapateira','sapato','saxofone','scanner','secador','seringa','serra','serrote','short','sino','sintetizador','sirene','skate','sombrinha','sonda','spray','sunga','tabuleiro','taça','tamanco','tambor','tampa','tanque','tapete','tatame','teclado','telefone','telha','tesoura','tigela','tijolo','torneira','touca','trampolim','travesseiro','trompete','tuba','tubo','turbante','uniforme','urna','vaporizador','vara','varal','vareta','varinha','vaso','vassoura','vela','veleiro','ventilador','ventoinha','veste','vestido','vidro','viola','violino','viseira','vitrola','volante']

var winChars = []//teclas acertadas
var splitChars = []//palavra dividida por caractere
var missKey = []//teclas erradas
var life = 0//contador de erros
var maxlife = 6//limite de erros em uma palavra
var winTurn = false//detecta se já acertou durante contagem
var alreadyMiss = false//detecta se já errou durante contagem
var score = 0//pontuação por acerto - detecção de vitória
var keySelect //armazena tecla selecionada
var categ = 0 //categoria selecionada da lista lateral

document.addEventListener("keypress", function onPress(event) {//Detecção de entrada do teclado
    if (event.key) {
        if(validChar.indexOf((event.key).toUpperCase())>-1){
            action((event.key).toUpperCase())
        }
    }
});

function newgame(){//Iniciar novo jogo
    noticont.style='display:none;'
    winChars = []// Resetando variaveis
    winTurn = false
    damageLock = false
    alreadyMiss = false
    forcatxt.innerHTML = ''
    life = 0
    score = 0
    // Escolhendo palavra aleatóriamente
    switch(categ){
        case 0:
            selectedWord = categAnimal[Math.floor(Math.random() * categAnimal.length)].toUpperCase();
            break;
        case 1:
            selectedWord = categAnimal[Math.floor(Math.random() * categAnimal.length)].toUpperCase();
            break;
        case 2:
            selectedWord = categComida[Math.floor(Math.random() * categComida.length)].toUpperCase();
            break;
        case 3:
            selectedWord = categObjetos[Math.floor(Math.random() * categObjetos.length)].toUpperCase();
            break;
    }
    
    splitChars = selectedWord.split("")//Cortando caracteres da palavra escolhida
    for(c of selectedWord){winChars.push('_');forcatxt.innerHTML += '_ ';}/* Desenhando caracteres vazios*/
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
    
    if(winTurn===false){life++;forcaUpdate();}//Caso erre a letra, perca vida
    if(life>=maxlife){//se a vida zerar, perde
        noticont.style='display:flex;'
        notitext.innerHTML='Perdeu kkkk seu bobo, a palavra era '+selectedWord+'...'
    }
    if(score >= selectedWord.length){//se a pontuação for maior igual a tamanho da palavra, ganha
        noticont.style='display:flex;'
        notitext.innerHTML='Você ganhou, a palavra era '+selectedWord+', seu bom!'
    }
    /*diferença entre in e of,
    in retorna numero "indice" para a variavel;
    of retorna elemento para a variavel*/
    addGraphics()
}
function toggle(are){//Seleciona opção na lista
    switch(are){
        case "all":
            for(var c=0;c<4;c++){
                elementToggle = window.document.querySelector('#opt'+c)
                elementToggle.setAttribute('src','img/ckd.png')
            }
            break;
        case "animal":
            categ = 1
            cleanToggle()
            elementToggle = window.document.querySelector('#opt1')
            elementToggle.setAttribute('src','img/ckd.png')
            break;
        case "food":
            categ = 2
            cleanToggle()
            elementToggle = window.document.querySelector('#opt2')
            elementToggle.setAttribute('src','img/ckd.png')
            break;
        case "objects":
            categ = 3
            cleanToggle()
            elementToggle = window.document.querySelector('#opt3')
            elementToggle.setAttribute('src','img/ckd.png')
            break;
        case "create":
            break;
        case "lifes":
            if(maxlife>13){maxlife=1}else{maxlife++}
            window.document.querySelector('#lifechange').innerHTML = '&#128159 erros permitidos ['+maxlife+']'
            break;
    }
}
function cleanToggle(){//limpa itens selecionados na lista lateral
    for(var c=0;c<4;c++){
        elementToggle = window.document.querySelector('#opt'+c)
        elementToggle.setAttribute('src','img/nckd.png')
    }
}
function forcaUpdate(){//Atualizando imagem da forca
    forcaelement.setAttribute('src','img/lifes/live'+life+'.svg')
}
function addGraphics(){//Pinta teclas que já foram utilizadas
    for(c of missKey){
        keySelect = window.document.querySelector(".ke"+c)
        if(selectedWord.indexOf(c)>-1){
            keySelect.style='background-color:#00aa69c9;'
        }else{
            keySelect.style='background-color:#5a2c2cd8;'
        }
    }
}
function cleanGraphics(){//Limpa efeito nas teclas
    for(c of missKey){
        //window.alert(".ke"+c)
        keySelect = window.document.querySelector(".ke"+c)
        keySelect.style=""
    }
    missKey=[]
}