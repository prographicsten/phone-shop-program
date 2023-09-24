import { useEffect, useState } from "react";
// You can use 1 model
import PhoneCard from "../Phone/PhoneCard";
// You can use 2 model
// import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));
        
        if(favoritesItems){
            setFavorites(favoritesItems);
        }else{
            setNotFound('Not data found for favorites');
        }

    }, [])
    console.log(favorites);

    return (
        <div className="py-10">
            {
                notFound ? 
                <div className="flex justify-center items-center h-[70vh] text-base font-semibold">
                    <p className="text-red-500">{notFound}</p>
                </div> 
                :
                <div>
                    {favorites.length > 0 }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {/* You can use 1 model */}
                        {favorites?.map((phone, idx) => <PhoneCard key={idx} phone={phone}></PhoneCard>)}
                        {/* You can use 2 model */}
                        {/* {favorites?.map((phone, idx) => <FavoritesCard key={idx} phone={phone}></FavoritesCard>)} */}
                    </div>
                </div>
            }
        </div>
    );
};

export default Favorites;