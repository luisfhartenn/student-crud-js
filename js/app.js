import {

 

    adicionarAlunos,

 

    listarAlunos,

 

    atualizarAlunos,

 

    removerAluno

 

} from "./alunos.js";

 

 

import {

    renderizarAlunos

} from "./ui.js";

 

 

// ELEMENTOS DO FORMULÁRIO

 

const form =

    document.getElementById("alunoForm");

 

const alunoId =

    document.getElementById("alunoId");

 

const nome =

    document.getElementById("nome");

 

const email =

    document.getElementById("email");

 

const idade =

    document.getElementById("idade");

 

const submitButton =

    document.getElementById("submitButton");

 

const cancelButton =

    document.getElementById("cancelButton");

 

const formTitle =

    document.getElementById("formTitle");

 

 

 

// ATUALIZAR A LISTA

 

 

function atualizarLista() {

 

    // Busca os alunos.

 

    const alunos = listarAlunos();

 

 

    // Envia os alunos para a interface.

 

    renderizarAlunos(

 

        alunos,

 

        iniciarEdicao,

 

        excluirAluno

 

    );

}

 

 

 

// CADASTRAR / ATUALIZAR

 

 

form.addEventListener(

    "submit",

    event => {

 

        // Impede o formulário de

        // recarregar a página.

 

        event.preventDefault();

 

 

        // Pega os valores.

 

        const nomeValor =

            nome.value.trim();

 

        const emailValor =

            email.value.trim();

 

        const idadeValor =

            Number(idade.value);

 

 

        // Verifica se estamos editando.

 

        if (alunoId.value) {

 

            atualizarAlunos(

 

                Number(alunoId.value),

 

                nomeValor,

 

                emailValor,

 

                idadeValor

            );

 

        } else {

 

            // Caso contrário,

            // estamos cadastrando.

 

            adicionarAlunos(

 

                nomeValor,

 

                emailValor,

 

                idadeValor

            );

        }

 

 

        // Limpa o formulário.

 

        limparFormulario();

 

 

        // Atualiza a lista.

 

        atualizarLista();

    }

);

 

 

 

// INICIAR EDIÇÃO

 

 

function iniciarEdicao(aluno) {

 

    // Coloca os dados do aluno

    // dentro do formulário.

 

    alunoId.value = aluno.id;

 

    nome.value = aluno.nome;

 

    email.value = aluno.email;

 

    idade.value = aluno.idade;

 

 

    // Altera o título.

 

    formTitle.textContent =

        "Editar aluno";

 

 

    // Altera o texto do botão.

 

    submitButton.textContent =

        "Salvar alteração";

 

 

    // Mostra o botão cancelar.

 

    cancelButton.hidden = false;

 

 

    // Leva o usuário para o formulário.

 

    nome.focus();

}

 

 

 

// EXCLUIR

 

 

function excluirAluno(id) {

 

    // Pergunta antes de excluir.

 

    const confirmar =

        confirm(

            "Deseja realmente excluir este aluno?"

        );

 

 

    if (!confirmar) {

 

        return;

    }

 

 

    // Remove o aluno.

 

    removerAluno(id);

 

 

    // Atualiza a tela.

 

    atualizarLista();

}

 

 

 

// LIMPAR FORMULÁRIO

 

 

function limparFormulario() {

 

    form.reset();

 

    alunoId.value = "";

 

    formTitle.textContent =

        "Cadastrar aluno";

 

    submitButton.textContent =

        "Cadastrar";

 

    cancelButton.hidden = true;

}

 

 

// ==========================================

// BOTÃO CANCELAR

// ==========================================

 

cancelButton.addEventListener(

    "click",

    limparFormulario

);

 

 

atualizarLista();


