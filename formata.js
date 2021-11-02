import { listaHotel } from "./requestApi.js"

export const formatarTesto = (testo) =>{
    listaHotel( testo
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-")
    .toLowerCase());

}