import axios from "axios";
import { useEffect, useState } from "react";
import { ICharacter } from "../../models/Character";
import { Card } from "../Card";

const Dashboard = () => {
  const [characters, setCharacters] = useState([]);
  const url = 'https://rickandmortyapi.com/api/';

  const getAllCharacters = () => {
    axios.get(`${url}character`)
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    getAllCharacters();
  }, [])
  return <div className="flex flex-wrap gap-3">
    {characters.map((character: ICharacter) => 
    <Card character={character} key={character?.id} />)}
  </div>
}

export default Dashboard;