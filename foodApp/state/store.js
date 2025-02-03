import { configureStore } from "@reduxjs/toolkit";
import favoritesReducers from "./favorites"

export const store=configureStore({
    reducer:{
        favoritesMeals:favoritesReducers,
    }
})