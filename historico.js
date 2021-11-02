import { escutandoDepoisBuscador } from "./exluirAoClicar.js"

export function historico (item) {

    const parteUm = document.createElement('li')
    parteUm.innerText = item;
    parteUm.id = "excluiOnclick"
    parteUm.classList = "clicke"
    const cont = document.querySelector("#testandoDois")
    cont.innerHTML = ""
    cont.append(parteUm)

    escutandoDepoisBuscador ()
}

