import axios from "axios";
import { useState } from "react";

export default function RickAndMortyService() {
    const [characters, setCharacters] = useState([]);
    const url = 'https://rickandmortyapi.com/api/';

    const getAllCharacters = () => {
        axios.get(`${url}character`)
        .then((response) => {
            console.log(response);
            
        })
        .catch((error) => console.error(error))
    }

}
