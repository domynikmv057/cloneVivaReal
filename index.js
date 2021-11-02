import { handleKeyUp } from "./debouceHandles.js"
import { formatarTesto } from "./formata.js"
import { listaHotel } from "./requestApi.js"
//import { preTest } from "./testar.js"

// const pegaLi = document.querySelector("#excluirClic")
// pegaLi.addEventListener("click", (e)=>{
//     pegaLi.innerHTML = ""
// })


document.querySelector("#excluirClic").onclick = function(){
    
    const itemADeletar = document.querySelector(".oooooo")
    itemADeletar.innerHTML = ""
    console.log("hie");
}