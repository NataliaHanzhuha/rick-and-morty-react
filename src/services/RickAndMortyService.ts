import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiResponce } from '../models/ApiResponce';
import { setCharacters, setNext, setCharacter } from '../store/CharactersFilter';
import { ICharacter } from '../models/Character';

export const rickAndMortyApi = createApi({
  reducerPath: 'rickAndMortyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  keepUnusedDataFor: 5,

  endpoints: (builder) => ({
    getAllCharacters: builder.query<IApiResponce, number>({
      query: (next) => `character/?page=${next}`,
      keepUnusedDataFor: 5,

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        if (data) {
          dispatch(setCharacters(data.results));
          dispatch(setNext());
        }
      },
    }),
    getCharacterById: builder.query<ICharacter, number>({
      query: (id) => `character/${id}`,

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;

        if (data) {
          dispatch(setCharacter(data));
        }
      }
    })
  })
})

export const {
  useGetAllCharactersQuery,
  useLazyGetAllCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetCharacterByIdQuery
} = rickAndMortyApi;