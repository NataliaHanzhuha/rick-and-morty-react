import { ICharacter } from "../../models/Character";
import { Link } from "react-router-dom";

const Card = ({ character }: { character: ICharacter }) => {
  const setBadgeColor = () => {
    return character?.status === 'Alive'
      ? 'green'
      : character?.status === 'Dead'
        ? 'red'
        : 'gray';
  }
  return (<div className="flex gap-3">
    <img src={character.image}
      alt={character.name}
      loading="lazy"
      width="200px"
      className="" />

    <div className="w-40 flex flex-col gap-2">
      <Link to={`character/${character.id}`}>{character.name}</Link>
      <span>{character.location.name}</span>
      <div className="inline-flex gap-2 items-center ">
        {character?.status}
        <div className="rounded-full h-4 w-4" style={{ backgroundColor: setBadgeColor() }}></div>
        {character?.species}
      </div>
    </div>

  </div>)
}

export default Card;