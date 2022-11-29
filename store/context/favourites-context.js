import { createContext, useState } from "react";

export const FavouritesContext=createContext({
    ids:[],
    addFavourite:(id)=>{},
    removeFavourite:(id)=>{}
})

 const FavouritesContextProvider=({children})=>{
    const [favMealIds,setFavMealIds]=useState([])
    const addFavourite=(id)=>{
        setFavMealIds((current)=>[...current,id])
    }

    const removeFavourite=(id)=>{
        setFavMealIds((current)=>current.filter((mealId)=>mealId!==id))
    }

    const value={
        ids:favMealIds,
        addFavourite:addFavourite,
        removeFavourite:removeFavourite
    }
    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}

export default FavouritesContextProvider