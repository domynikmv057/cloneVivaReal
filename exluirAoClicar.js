export function escutandoDepois (){

    const el = document.querySelector(".clicarr")
    el.addEventListener("click", ()=>{
        const ul = document.querySelector(".listaDeApartamentos");
        ul.innerHTML = "";

        const botaoClear = document.querySelector(".seApaga")
        botaoClear.innerHTML = "";

        const listaDeApartamentos = document.querySelector(".totalDeApart")
        listaDeApartamentos.innerHTML = "";

        const cont = document.querySelector("#testandoDois")
        cont.innerHTML = ""
    })

}

export function escutandoDepoisBuscador (){
    
    const el = document.querySelector(".clicke")
    el.addEventListener("click", ()=>{
        const ul = document.querySelector(".listaDeApartamentos");
        ul.innerHTML = "";

        const botaoClear = document.querySelector(".seApaga")
        botaoClear.innerHTML = "";

        const listaDeApartamentos = document.querySelector(".totalDeApart")
        listaDeApartamentos.innerHTML = "";

        const cont = document.querySelector("#testandoDois")
        cont.innerHTML = ""
    })
}