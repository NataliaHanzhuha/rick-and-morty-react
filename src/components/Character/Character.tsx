import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacter } from "../../models/Character";
import axios from "axios";

const Character = () => {
    const { id } = useParams();
    const url = 'https://rickandmortyapi.com/api/';
    const [character, setCharacter] = useState<ICharacter>();

    useEffect(() => {
        axios.get(`${url}character/${id}`)
        .then((response) => {
            console.log(response);

            setCharacter(response.data as ICharacter);
        })
        .catch((error) => console.error(error))
    }, [])

    return <div className="flex gap-10 items-center justify-between ml-10 mr-10">
        <img src={character?.image}
            alt={character?.name}
            loading="lazy"
            className="h-full w-1/2" />

        <div className="flex flex-col gap-5 justify-start w-1/2 text-2xl">
            <div>
                <span className="text-gray-500">Name: </span>
                {character?.name}
            </div>
            <div>
                <span className="text-gray-500">Last location: </span>
                {character?.location?.name}
            </div>
            <div>
                <span className="text-gray-500">Status: </span>
                {character?.status}
            </div>
        </div>

    </div>
}

export default Character;