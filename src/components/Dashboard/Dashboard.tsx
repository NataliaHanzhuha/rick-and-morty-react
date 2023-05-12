import { useEffect } from "react";
import { ICharacter } from "../../models/Character";
import { Card } from "../Card";
import { useLazyGetAllCharactersQuery } from "../../services/RickAndMortyService";
import { useAppSelector } from "../../store/hooks";

const Dashboard = () => {
  const [getAllCharacters] = useLazyGetAllCharactersQuery();
  const characters = useAppSelector((state) => state.characterState.characters);
  const next = useAppSelector((state) => state.characterState.next);

  useEffect(() => {
    getAllCharacters(0);
  }, [])

  return <div className="flex flex-col gap-3" >
    <div className="flex flex-wrap gap-3">
      {characters.map((character: ICharacter, index: number) =>
        <Card character={character} key={index} />)}
    </div>

    <button onClick={() => getAllCharacters(next)}>Load More</button>
  </div>
}

export default Dashboard;