import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../models/Character';

export interface CharacterState {
    next: number;
    characters: ICharacter[];
    character: ICharacter | null;
}

export const initialState: CharacterState = {
    next: 0,
    characters: [],
    character: null
};

const userSlice = createSlice({
    name: 'characterState',
    initialState,
    reducers: {
        setNext: (state, action: PayloadAction<void>) => {
            state.next++;
        },
        setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
            state.characters = [...state.characters, ...action.payload];
            console.log(state.next, state.characters);
            
            state.character = null;
        },
        setCharacter: (state, action: PayloadAction<ICharacter>) => {
            state.character = action.payload;
        },
    },
});

export const { setNext, setCharacters, setCharacter } = userSlice.actions;
export default userSlice.reducer;