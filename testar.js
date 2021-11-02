export function preTest (item) {
    const botao = document.createElement("button")
    botao.setAttribute("type", "button")
    botao.id = "excluirClic"

    const parteUm = document.createElement('li')
    parteUm.innerText = item;
    parteUm.id = "excluiOnclick"
    const cont = document.querySelector("#testandoDois")
    cont.append(parteUm, botao)
}


