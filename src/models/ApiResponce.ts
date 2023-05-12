import { ICharacter } from "./Character";

export interface IApiResponce {
    next: string,
    results: ICharacter[]
}