//CADASTRO DE PORRA VEIA
async function cadastrarProf(event) {
    event.preventDefault();

    const prof = {
        email: document.getElementById("txt").value,
        senha: document.getElementById("senha1").value
    };

    try {
        const response = await fetch('/prof', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prof)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Conta criada com sucesso!");
        } else {
            alert(`Erro: ${result.message}`);
        }
    } catch (err) {
        console.error("Erro na solicitação:", err);
        alert("Erro ao cadastrar conta.");
    }

}

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