import gravata from "@/assets/productsPage/gravata.jpg";
import cachoeiraSolidao from "@/assets/productsPage/cachoeiraSolidao.jpg";
import sunrise from "@/assets/productsPage/sunrise.jpg";
import pedraBoaVista from "@/assets/productsPage/pedraBoaVista.webp";
import { ProductType } from "./types";

export const products: Array<ProductType> = [
  { 
    name: "Praia do Gravatá", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel.",
    id: "Praia do Gravatá",
    image: gravata,
    price: 750,
  },
  { 
    name: "Cachoeira da Solidao", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel.",
    id: "Cachoeira da Solidao", 
    image: cachoeiraSolidao,
    price: 750,
  },
  { 
    name: "Pedra da boa vista", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel.",
    id: "Pedra da boa vista", 
    image: pedraBoaVista,
    price: 750, 
  },
  { 
    name: "Dia de Chuva", 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel.",
    id: "Dia de Chuva", 
    image: sunrise,
    price: 750,
  },
];
