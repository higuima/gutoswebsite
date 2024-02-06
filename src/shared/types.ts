export enum SelectedPage {
    Home = "home",
    Serviços = 'serviços',
    Contato = "contato",
}

export interface ServiceType {
    name: string;
    header_description: string;
    description?: string;
    images: Array<string>;
    pageName: string;
    type: Content;
    challenges: string;
    result: string;
    article: string;
    url: string;
}

export enum Content {
    Design = "design",
    Data = "data",
    Proparanda = "propaganda"
}