/*============================
STORAGE
RESPONSÁVEL PELO LOCALSTORAGE
==============================*/
 
const CHAVE = "alunos";
 
/*============================
SALVAR
==============================*/
 
export function salvarAlunos(alunos) {
    localStorage.setItem(
        CHAVE,
        JSON.stringify(alunos)
    );
}
 
/*============================
BUSCAR
==============================*/
 
export function buscarAlunos() {
    const dados = localStorage.getItem(CHAVE)
 
    if (!dados){
        return[];
    }
    return JSON.parse(dados);
}