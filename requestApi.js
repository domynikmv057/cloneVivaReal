import { formatarTesto } from "./formata.js"
import { criarPredio } from "./fabricaApart.js"
import { preTest } from "./testar.js"
import { errorPage } from "./error.js"


export async  function listaHotel (estado) {
    if (estado === "sao-paulo"){
        const res = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=sp&city=${estado}`);
        let promisses = await res.json();
        criarPredio(promisses, `São Paulo - SP`);
        preTest(`São Paulo - SP`)

    }else if (estado === "rio-de-janeiro"){
        const res = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=rj&city=${estado}`);
        let promisses = await res.json();
        criarPredio(promisses, `Rio de Janeiro - RJ`);
        preTest(`Rio de Janeiro - RJ`)
    }else{
        try {
            const res = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=rj&city=${estado}`);
            let promisses = await res.json();
            errorPage(estado,promisses)

         }catch (e) {
            console.log(e.message );
            console.log(promisses);
         }
       


    }
}

