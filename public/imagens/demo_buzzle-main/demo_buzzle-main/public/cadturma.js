//GERAR ID 
/*
function gerarId() {
    let id;
    for (let i = 0; i < 6; i++) {
        const rand = Math.floor(Math.random() * 36); // número de 0 a 35
        id += rand.toString(36); // converte para caractere base36
    }
    return id;
}
*/

//CADASTRO DE TURMA
async function cadastrarTurma(event) {
    event.preventDefault();

    const turma = {
        nome: document.getElementById("nome").value,
        desc: document.getElementById("desc").value
    };

    try {
        const response = await fetch('/turma', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(turma)
        });

        const result = await response.json();
        if (response.ok) {
            alert("Turma cadastrada com sucesso!");
        } else {
            alert(`Erro: ${result.message}`);
        }
    } catch (err) {
        console.error("Erro na solicitação:", err);
        alert("Erro ao cadastrar cliente.");
    }

}
