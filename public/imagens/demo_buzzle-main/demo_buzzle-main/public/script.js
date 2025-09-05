let currentIndex = 0; //variável do carrossel na homepage

//ANIMACAO CADASTRO
let selecprof = 0;
let selecaluno = 0;
//SELECIONAR
function aniprof(){
    selecprof = 1;
    document.getElementById('divprof').className = 'animacaoprof';
    document.getElementById('divalun').className = 'tiraalun';
    document.getElementById('efeitoprof').className = 'efx';
    document.getElementById('divcad').className = 'divcad';
}

function anialun(){
    selecaluno = 1;
    document.getElementById('divalun').className = 'animacaoalun';
    document.getElementById('divprof').className = 'tiraprof';
    document.getElementById('efeitoalun').className = 'efx';
    document.getElementById('divcad').className = 'divcad';
}

//VOLTAR
function anivolta(){
    if(selecprof == 1){
        document.getElementById('divprof').className = 'voltaprof';
        document.getElementById('divalun').className = 'vemalun';
        document.getElementById('efeitoprof').className = 'saiefx';
        document.getElementById('divcad').className = 'saidivcad';
        selecprof = 0;
    }else{
        document.getElementById('divalun').className = 'voltaalun';
        document.getElementById('divprof').className = 'vemprof';
        document.getElementById('efeitoalun').className = 'saiefx';
        document.getElementById('divcad').className = 'saidivcad';
        selecaluno = 0;
    }
}

//VISUALIZAÇÃO DE SENHA CADASTRO
const button1 = document.getElementById('botao1');
let botao1click = false;
const button2 = document.getElementById('botao2');
let botao2click = false;

button1.addEventListener('click', function() {
    if (botao1click == false){
        botao1click = true;
    }else{
        botao1click = false;
    }
});

button2.addEventListener('click', function() {
    if (botao2click == false){
        botao2click = true;
    }else{
        botao2click = false;
    }
});

function anibotao1(){
    const btn = document.getElementById('botao1');
    const zoi = document.getElementById('olho1');
    const inp = document.getElementById('senha1');
    // Remove a classe anterior
    btn.classList.remove('versenha', 'saisenha');

    if(!botao1click){
    btn.classList.add('versenha');
    zoi.src = 'imagens/vesim.png';
    inp.type = 'text';
    botao1click = true;
    }else{
    btn.classList.add('saisenha');
    zoi.src = 'imagens/venao.png';
    inp.type = 'password';
    botao1click = false;
    }
}

function anibotao2(){
    const btn = document.getElementById('botao2');
    const zoi = document.getElementById('olho2');
    const inp = document.getElementById('senha2');
    // Remove a classe anterior
    btn.classList.remove('versenha', 'saisenha');

    if(!botao2click){
    btn.classList.add('versenha');
    zoi.src = 'imagens/vesim.png';
    inp.type = 'text';
    botao2click = true;
    }else{
    btn.classList.add('saisenha');
    zoi.src = 'imagens/venao.png';
    inp.type = 'password';
    botao2click = false;
    }
}

/*
!!!!! PONTO IMPORTANTE A SER RESOLVIDO: REDIRECIONAR PARA PÁGINA DIFERENTE DEPENDENDO SE É ALUNO OU PROFESSOR !!!!!
| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |
V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V V
*/

//CONCLUIR CADASTRO
function avanc(){
    let em = document.getElementById('txt').value;
    let s1 = document.getElementById('senha1').value;
    let s2 = document.getElementById('senha2').value;
    
    //tratamento de erro
    if(em == 0){
        alert("Preencha o campo de email.");
    }else if(s1 == 0 || s2 == 0){
        alert("Preencha o campo da senha.");
    }else if(s1!=s2){
        alert("As senhas são diferentes, por favor tente novamente.");
    }else{
        //avançar para etapa final do cadastro
        document.getElementById('divinput').className = 'saidafrentedivinputdocaralho'
    }
}

function conccad(){
    //conclusão de cadastro
    alert("Cadastro concluído!");
    window.location.href = "homealuno.html";
}

//VOLTAR LOGIN
function voltlog(){
    window.location.href = "landpage.html";
}

//CONCLUIR LOGIN
function conclog(){
    let em = document.getElementById('txt').value;
    let s1 = document.getElementById('senha1').value;
    //tratamento de erro
    if(em == 0){
        alert("Preencha o campo de email.");
    }else if(s1 == 0){
        alert("Preencha o campo da senha.");
    }else{
        //conclusão de login
        window.location.href = "homealuno.html";
    }

}

//MENU AMBORGUI HOMEPAGE

let amborguiclick = 0;

function amborgui(){
    alert("Amborgui clicado");
    if(amborguiclick == 0){
        document.getElementById('span1').classList.add("x1");
        document.getElementById('span2').classList.add("x2");
        amborguiclick = 1;
    }else{
        document.getElementById('span1').classList.remove("x1");
        document.getElementById('span2').classList.remove("x2");
        amborguiclick = 0;
    }
}

//CARROSSEL HOMEPAGE
function moveSlide(step) {
    const slide = document.querySelector('.divcarrossel');
    const slideWidth = slide.offsetWidth + 32; // 32px = 2rem margin-right
    const totalSlides = document.querySelectorAll('.divcarrossel').length;

    // Número de slides visíveis no viewport
    const visibleWidth = document.querySelector('.carrossel').offsetWidth;
    const visibleCount = Math.floor(visibleWidth / slideWidth);
    const maxIndex = totalSlides - visibleCount;

    if (currentIndex + step < 0 || currentIndex + step > maxIndex) return;

    currentIndex = currentIndex + step;

    const seccarrossel = document.querySelector('.seccarrossel');
    seccarrossel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}