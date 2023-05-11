import { ICharacter } from "../../models/Character";
import { Link } from "react-router-dom";

const Card = ({ character }: { character: ICharacter }) => {
  return (<div className="flex gap-3">
    <img src={character.image} 
    alt={character.name} 
    loading="lazy"
    width="200px"
    className=""/>

    <div className="w-40 flex flex-col gap-2">
      <Link to={`character/${character.id}`}>{character.name}</Link>
      <span>{character.location.name}</span>
      <span>{character.status}</span>
    </div>
    
  </div>)
}

export default Card;