import axios from "axios";

export async function loader({ params }: any) {
    const url = 'https://rickandmortyapi.com/api/';

    const character = await axios.get(`${url}character/${params.id}`)
    
    return { character };
  }