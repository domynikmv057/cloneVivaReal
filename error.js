export function errorPage(item, promisses){
    const inputDigitado = document.querySelector(".totalDeApart")
    inputDigitado.innerText = `Nao encontramos resultados em: ${item}`


    const erroMensage = document.querySelector('.listaDeApartamentos')
    const h1Error = document.createElement("h1");
    h1Error.innerText = "OOOOPS!"
    const h1ErrorParDois = document.createElement("h1");
    h1ErrorParDois.innerText = "ALGO DEU ERRADO NA SUA BUSCA."
}