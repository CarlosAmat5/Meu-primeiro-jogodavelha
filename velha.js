let jogador, vencedor= null 
let jogadorSelecionado= document.getElementById('jogador-selecionado')
let vencedorSelecionado= document.getElementById('vencedor-selecionado')
// let quadrados = document.getElementsByClassName('cuadrado')

mudarJogador('x')

function escolherQuadrado(id){
    if(vencedor!==null){
        return
    }

    var quadrado=document.getElementById(id)
    if(quadrado.innerHTML !=='-'){
        return
    }
    quadrado.innerHTML= jogador
    quadrado.style.color = '#000'

    if (jogador==='x'){
        jogador='o'
    } else{
        jogador='x'
    }
    mudarJogador(jogador)
    checaVencedor()
}

function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML= jogador
}

function checaVencedor(){
    let quadrado1 = document.getElementById(1)
    let quadrado2 = document.getElementById(2)
    let quadrado3 = document.getElementById(3)
    let quadrado4 = document.getElementById(4)
    let quadrado5 = document.getElementById(5)
    let quadrado6 = document.getElementById(6)
    let quadrado7 = document.getElementById(7)
    let quadrado8 = document.getElementById(8)
    let quadrado9 = document.getElementById(9)

    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        colorVencedor(quadrado1,quadrado2,quadrado3)
        mudarVencedor(quadrado1)
        return
    }

    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        colorVencedor(quadrado4,quadrado5,quadrado6)
        mudarVencedor(quadrado4)
        return
    }

    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        colorVencedor(quadrado7,quadrado8,quadrado9)
        mudarVencedor(quadrado7)
        return
    }

    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        colorVencedor(quadrado1,quadrado4,quadrado7)
        mudarVencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        colorVencedor(quadrado2,quadrado5,quadrado8)
        mudarVencedor(quadrado2)
        return
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        colorVencedor(quadrado3,quadrado6,quadrado9)
        mudarVencedor(quadrado3)
        return
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        colorVencedor(quadrado1,quadrado5,quadrado9)
        mudarVencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        colorVencedor(quadrado3,quadrado5,quadrado7)
        mudarVencedor(quadrado3)
    
    }

}

function mudarVencedor(quadrado){
    vencedor=quadrado.innerHTML
    vencedorSelecionado.innerHTML=vencedor
}

function colorVencedor(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#00FF17'
    quadrado2.style.background = '#00FF17'
    quadrado3.style.background = '#00FF17'
}

function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false
    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML===quadrado2.innerHTML && quadrado2.innerHTML=== quadrado3.innerHTML){
        eigual=true
    }
    return eigual
}

function reiniciar(){
    vencedor=null
    vencedorSelecionado.innerHTML=''

    for(let i=1; i<=9;i++){
        let quadrado=document.getElementById(i)
        quadrado.style.background= 'rgb(193, 148, 239)'
        quadrado.style.color= 'rgb(193, 148, 239)'
        quadrado.innerHTML= '-'
    }
    mudarJogador('x')
}