/*==========================
CRUD DE ALUNOS
=====================*/

import{
    salvarAlunos,
    buscarAlunos
} from "./storage.js";

/*==========================
CREATE
=====================*/

export function adicionarAlunos(nome, email, idade){
    //busca os alunos existentes.
    const alunos =buscarAlunos();
    //criar um novo objeto
    const novoAluno = {
        id: Date.now(),
        nome: nome,
        email: email,
        idade: idade
    };

    alunos.push(novoAluno);
    //salvar novamente.
    salvarAlunos(alunos);
    console.log("Aluno adicionado com sucesso!");
}

/*==========================
READ
=====================*/
export function listarAlunos(){
    return buscarAlunos();
}

/*==========================
UPDATE
=====================*/
export function atualizarAlunos(
    id,
    nome,
    email,
    idade
){
    const alunos = buscarAlunos();
    //procura o aluno pelo ID.
    const aluno = alunos.find(
        aluno => aluno.id === id
    );

    if (!aluno){
        return;
    }
    //atualizar os dados
    aluno.nome = nome;
    aluno.email = email;
    aluno.idade = idade;

    salvarAlunos(alunos)
}

/*==========================
DELETE
==========================*/

export function removerAluno(id) {

    const alunos = buscarAlunos();

    // Procura o índice do aluno pelo ID
    const indiceAluno = alunos.findIndex(
        aluno => aluno.id === id
    );

    // Verifica se o aluno existe
    if (indiceAluno === -1) {
        console.log("Aluno não encontrado!");
        return;
    }

    // Remove o aluno do array
    alunos.splice(indiceAluno, 1);

    // Salva novamente
    salvarAlunos(alunos);

    console.log("Aluno excluído com sucesso!");
}



