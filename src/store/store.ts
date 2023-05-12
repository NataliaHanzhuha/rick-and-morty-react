import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rickAndMortyApi } from '../services/RickAndMortyService';
import { persistReducer, persistStore } from 'redux-persist';
import CharactersFilter from './CharactersFilter';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['characterState'],
}; // for reset state after reload

const rootReducer = combineReducers({
  characterState: CharactersFilter,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

const middleware = [rickAndMortyApi.middleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ immutableCheck: false, serializableCheck: false }).concat(middleware),
})

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch