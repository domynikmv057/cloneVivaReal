import { dicionario } from "./dicionario.js"
export async function criarPredio (promisses, estado){
    const pegaAPi = await promisses.search.result.listings;

   
   

    //Total Count
    const totalApartamentos = await promisses.search.totalCount
    const listaDeApartamentos = document.querySelector(".totalDeApart")
    listaDeApartamentos.innerHTML = "";
    listaDeApartamentos.innerText = `${totalApartamentos} Apartamentos encontrados em ${estado}`
    //Fim Total count

   //BOTAO ESTADO
    const botaoClear = document.querySelector(".seApaga")
    const span = document.createElement("span")
    span.innerText = `${estado}`
    span.classList= "seApagaText"
    botaoClear.append(span)
    //FIM BOTAO ESTADO


    //setando e mapeando todo o conteudo
    pegaAPi.map((item) =>{
        const ul = document.querySelector(".listaDeApartamentos");

        const li = document.createElement("li");
        li.classList ="listaLis"
        const section = document.createElement("section");
        section.classList = "apart";
    
        const divApartImg = document.createElement("div");
        divApartImg.classList = "apartImg";
    
        const img = document.createElement("img");
        img.setAttribute("width"," 100%");
        img.setAttribute("height", "100%");
        img.setAttribute("src", `${item.medias[0].url}`)
    
        // aqui eu monto uma boneca russa, colocando cada elementro dentro do outro
        divApartImg.append(img);
        section.append(divApartImg);
        li.append(section);
        ul.append(li);
    
        //setando e mapeando todo o conteudo
    
        const divApartConteudo = document.createElement("div");
        divApartConteudo.classList = "apartConteu";
    
        const pApartDescri = document.createElement("p");
        pApartDescri.classList = "apartDescri";
        pApartDescri.innerText = `${item.link.data.city} - ${item.link.data.neighborhood} - ${item.link.data.street} - ${item.link.data.streetNumber} - ${item.link.data.zone}`
    
        const h2Titulo = document.createElement("h2");
        h2Titulo.classList = "apartTitulo";
        h2Titulo.innerText = `${item.link.name}`
    
        const pApartAtrib = document.createElement("p");
        pApartAtrib.classList = "apartAtrib";
        pApartAtrib.innerText = `${item.listing.usableAreas[0]} M²- ${item.listing.bathrooms} Banheiros - ${item.listing.bedrooms} Quartos - ${item.listing.parkingSpaces} Vagas`
    

        const ulSelect = document.createElement("ul")
        ulSelect.classList= "apartEstra"

        let estras = [];
        item.listing.amenities.map((value) =>{
            estras.push(value)
        })
        estras.map((valor) => {
            const liApartEstra = document.createElement("li")
            const divApartEstra = document.createElement("div");
            divApartEstra.classList = "apartEstraDiv"
            divApartEstra.innerText = `${traduz(valor)}`
            liApartEstra.append(divApartEstra)
            ulSelect.append(liApartEstra)
        })
        
        
        
        
        
        
        const h2ApartValor = document.createElement("h2");
        h2ApartValor.classList = "apartValor"
        h2ApartValor.innerText = `R$ ${item.listing.pricingInfos[0].price}`
    
        // aqui eu monto uma boneca russa, colocando cada elementro dentro do outro
        divApartConteudo.append(pApartDescri, h2Titulo, pApartAtrib,ulSelect,h2ApartValor);
        section.append(divApartConteudo)
     
    })


    

}

function traduz (item){
   return dicionario
   .filter((aaa) => item === aaa.word)
   .reduce((ac, aaa) => aaa.translated, "")
}

