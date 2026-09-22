// ==========================================
// INTERFACE
// ==========================================
 
 
// Localiza o elemento onde os alunos
// serão exibidos.
 
const listaAlunos =
    document.getElementById("listaAlunos");
 
 
// Localiza o contador.
 
const contador =
    document.getElementById("contador");
 
 
// ==========================================
// RENDERIZAR ALUNOS
// ==========================================
 
export function renderizarAlunos(
    alunos,
    editar,
    excluir
) {
 
    // Limpa a lista.
 
    listaAlunos.innerHTML = "";
 
 
    // Atualiza o contador.
 
    contador.textContent =
        `${alunos.length} aluno${alunos.length !== 1 ? "s" : ""}`;
 
 
    // Se não existir nenhum aluno.
 
    if (alunos.length === 0) {
 
        listaAlunos.innerHTML =
            "<p>Nenhum aluno cadastrado.</p>";
 
        return;
    }
 
 
    // Percorre os alunos.
 
    alunos.forEach(aluno => {
 
        // Cria uma div.
 
        const div =
            document.createElement("div");
 
 
        // Adiciona a classe CSS.
 
        div.classList.add("aluno");
 
 
        // Cria o conteúdo.
 
        div.innerHTML = `
 
            <h3>
                ${aluno.nome}
            </h3>
 
            <p>
                <strong>E-mail:</strong>
                ${aluno.email}
            </p>
 
            <p>
                <strong>Idade:</strong>
                ${aluno.idade} anos
            </p>
 
            <div class="acoes">
 
                <button class="editar">
                    Editar
                </button>
 
                <button class="excluir">
                    Excluir
                </button>
 
            </div>
        `;
 
 
        // Localiza o botão editar.
 
        const botaoEditar =
            div.querySelector(".editar");
 
 
        // Localiza o botão excluir.
 
        const botaoExcluir =
            div.querySelector(".excluir");
 
 
        // Evento do botão editar.
 
        botaoEditar.addEventListener(
            "click",
            () => editar(aluno)
        );
 
 
        // Evento do botão excluir.
 
        botaoExcluir.addEventListener(
            "click",
            () => excluir(aluno.id)
        );
 
 
        // Adiciona o aluno na tela.
 
        listaAlunos.appendChild(div);
    });
}
