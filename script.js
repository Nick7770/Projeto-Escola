
let materia_selecionada = document.getElementById("materia_selecionada")





let botao_fisica_materia = document.getElementById("fisica_icone_botao")
botao_fisica_materia.addEventListener("click", selecionado_fisica_materia)

let botao_quimica_materia = document.getElementById("quimica_icone_botao")
botao_quimica_materia.addEventListener("click", selecionado_quimica_materia)

function selecionado_fisica_materia() {
    materia_selecionada.innerText = `Física`
}
function selecionado_quimica_materia() {
    materia_selecionada.innerText = `Química`
}