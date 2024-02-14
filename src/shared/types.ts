export enum SelectedPage {
    Home = "home",
    Serviços = 'serviços',
    Contato = "contato",
}

export interface ProductType{
    name: string,
    description: string,
    id:string,
    image: string,
    price: number,
}