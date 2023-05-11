export interface ICharacter {
    created: Date | string;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: Details;
    name: string;
    origin: Details;
    species: string;
    status: string;
    type: string;
    url: string
}

export interface Details {
    name: string;
    url: string;
}

export {}