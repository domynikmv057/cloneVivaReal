export function errorPage(item){


    const inputDigitado = document.querySelector(".totalDeApart")
    inputDigitado.innerText = `Nao encontramos resultados em: ${item}`


    const erroMensage = document.querySelector('.listaDeApartamentos')
    erroMensage.innerHTML = "";
    
    const h1Error = document.createElement("h1");
    h1Error.innerText = "OOOOPS!"
    h1Error.classList = "errorText"

    const h1ErrorParDois = document.createElement("h1");
    h1ErrorParDois.innerText = "ALGO DEU ERRADO NA SUA BUSCA."
    h1ErrorParDois.classList = "errorText"


    const h2Error = document.createElement("h2");
    h2Error.classList = "red errorText";
    h2Error.innerText = "Status 500";


    const h1errorParteTres = document.createElement("h1");
    h1errorParteTres.innerText = "POR FAVOR TENTE NOVAMENTE."
    h1errorParteTres.classList = "errorText"

    erroMensage.append(h1Error, h1ErrorParDois, h2Error, h1errorParteTres)

}