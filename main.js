let RespostaNumero = document.getElementsByClassName("nume")
let res=document.getElementById('res')
let res1=document.getElementsByClassName('res1')
let img2= document.getElementById('img2')
let conteudo= document.getElementById('conteudo')
let link = document.createElement('a')
link.href="#teste.html"
let tes = document.body.appendChild(link)
let desligado = document.getElementById('desligado')
let ligar = document.getElementById('ligar')
let valo = document.getElementById('valo')
let body = document.getElementById('body')
let m=0

let Fruta =[/*laranja*/5,/*macan*/6,/*abacate*/4,/*acerola*/3,/*uva*/6,/*abacaxi*/4,/*melao*/5,/*limao*/1,/*manga*/5,/*banana*/3,/*morango*/7,/*melancia*/5,/*repolho*/2,/*tomate*/5,/*beterraba*/4,/*cenoura*/7,/*cenola*/4,/*quiabo*/2,/*coentro*/3,/*macacheira*/4,/*pimentão*/3,/*berinjela*/3,/*alface*/2,/*jerimo*/5,/*queijoco*/25,/*queijomu*/30,/*queijorei*/35,/*queijopro*/50,/*queijopra*/34,/*queijomina*/75]

let NomeProduto=['laranja','maça','abacate','acerola','uva','abacaxi','melão','limão','manga','banana','morango','melancia',/*verdura*/'repolho','tomate','beterraba','cenoura','cebola','quiabo','coentro','macacheira','pimentao','berinjela','alface','jerimo','queijo coalho','queijo mussarela','queijo do reino','queijo probolone','queijo prato','queijo minas']

let NumeroMm =Array(100000).fill(0)
let lista =[]
let soma=0

function Desliga(){
  desligado.style.display='none'
  ligar.style.display='block'
  body.style.background='#42445A'

}
function Ligar(){
  ligar.style.display='none'
  desligado.style.display='block'
  body.style.background='#fff'
}
function Mais(M){
 if(M >= 0 && M < NumeroMm.length){
   NumeroMm[M]++
   RespostaNumero[M].innerHTML= NumeroMm[M]
   
 }
}


function Menos(M){
  if(M >= 0 && M < NumeroMm.length){
    NumeroMm[M]--
    RespostaNumero[M].innerHTML=NumeroMm[M]
  }
}

function Recebe(R){
  let total
  let ProdutoNome
  if (R >= 0 && R < NumeroMm.length) {
    m++
    lista.push(total)
    total = Fruta[R] * NumeroMm[R]
    NomeProduto[R]
  }

  let currentTotal = parseFloat(res.innerHTML) || 0;
  
  lista.push(`${NomeProduto[R]}  ${total}R$`)
  soma+=total
  

 res.innerHTML=`total ${soma} produtos ${lista.join('||')
  
}`
res.style.display="none"
  img2.src = `FotoUnica/compras-online.png`
  img2.style.color="#000"
   valo.innerHTML = m
   valo.style.display = 'block'
   
}

function Produtos() {
  // Altere o valor do parâmetro na URL para "ola mundo"
  window.location.href = `teste.html?mensagem= ${lista.join('<br>')} <br><br>valor total ${soma}R$ `
  
}
function mostra(){
  setTimeout(function() {
  document.body.style.display = 'block';
  }, 100);
}

new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

new Glider(document.querySelector('.glider1'), {
  slidesToShow: 3,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

new Glider(document.querySelector('.glider2'), {
  slidesToShow: 3,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});



