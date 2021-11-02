import { formatarTesto } from "./formata.js" //Esta funcionando, lebre se que vc precisa enviar o valor pra algum lugar

document.querySelector("#busca")
.addEventListener("keyup", handleKeyUp)

let time = null;
let valor = null
export function handleKeyUp(event){

    clearTimeout(time)
    time = setTimeout(() =>{
        formatarTesto(event.target.value)
    },1000)
}

