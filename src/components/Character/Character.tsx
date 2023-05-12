import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLazyGetCharacterByIdQuery } from "../../services/RickAndMortyService";
import { useAppSelector } from "../../store/hooks";

const Character = () => {
    const { id } = useParams();
    const [getCharacter] = useLazyGetCharacterByIdQuery();
    const character = useAppSelector((state) => state.characterState.character);

    const setBadgeColor = () => {
        return character?.status === 'Alive'
            ? 'green'
            : character?.status === 'Dead'
                ? 'red'
                : 'gray';
    }

    useEffect(() => {
        if (!id) {
            return;
        }
        getCharacter(+id);
    }, [])

    return <>
        <div className="flex gap-10 items-center justify-between ml-10 mr-10">
            <img src={character?.image}
                alt={character?.name}
                loading="lazy"
                className="h-full w-1/2" />

            <div className="flex flex-col gap-5 justify-start w-1/2 text-2xl">
                <a href="/">
                    <button className="bg-slate-300 text-white p-2 rounded-md">Back to Dashboard</button>
                </a>
                <div>
                    <span className="text-gray-500">Name: </span>
                    {character?.name}
                </div>
                <div>
                    <span className="text-gray-500">Last location: </span>
                    {character?.location?.name}
                </div>
                <div className="inline-flex gap-2 items-center ">
                    <span className="text-gray-500">Status: </span>
                    {character?.status}
                    <div className="rounded-full h-4 w-4" style={{ backgroundColor: setBadgeColor() }}></div>
                    {character?.species}
                </div>
            </div>

        </div>

        <div className="m-4">
            <span className="text-gray-500">
                Episode{character?.episode?.length === 1 ? '' : 's'} ({character?.episode?.length}):
            </span>

            <div className="flex flex-wrap gap-2 items-center justify-start">
                {character?.episode?.map((episode) => {
                    const urlSplit = episode.split('/');

                    return (<span className="p-2 border-2 rounded-md border-gray" key={episode}>
                        Seria {urlSplit[urlSplit.length - 1]}
                    </span>)
                })}
            </div>
        </div>
    </>
}

export default Character;