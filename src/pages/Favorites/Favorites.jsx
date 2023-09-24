import { useEffect, useState } from "react";
// You can use 1 model
import PhoneCard from "../Phone/PhoneCard";
// You can use 2 model
// import FavoritesCard from "./FavoritesCard";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));
        
        if(favoritesItems){
            setFavorites(favoritesItems);
            // count amount of favorites products
            const total = favoritesItems.reduce((preValue, currentPrice) => preValue + currentPrice.price, 0);
            console.log(total);
            setTotalPrice(total);
        }else{
            setNotFound('Not data found for favorites');
        }

    }, [])
    console.log(favorites);

    const handleRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNotFound('Not data found for favorites');
        toast("Delete succesfully");
    };

    // console.log(isShow);

    return (
        <div className="py-10">
            {
                notFound ? 
                <div className="flex justify-center items-center h-[70vh] text-base font-semibold">
                    <p className="text-red-500">{notFound}</p>
                </div> 
                :
                <div>
                    {
                    favorites.length > 0 && 
                    <div>
                        <button onClick={() => handleRemove()} className="px-5 py-1 bg-green-300 block rounded-sm mx-auto mb-10">Deleted All Favorites</button>
                        <h1 className="text-xl font-semibold mb-5">Total Price of Products : <span className="text-green-400">{totalPrice.toFixed(2)}</span></h1>
                    </div>
                    }
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                        {/* You can use 1 model */}
                        {
                            isShow ? 
                            favorites?.map((phone, idx) => <PhoneCard key={idx} phone={phone}></PhoneCard>)
                            :
                            favorites?.slice(0,2).map((phone, idx) => <PhoneCard key={idx} phone={phone}></PhoneCard>)
                        }
                        {/* You can use 2 model */}
                        {/* {favorites?.map((phone, idx) => <FavoritesCard key={idx} phone={phone}></FavoritesCard>)} */}
                    </div>
                    {
                        favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 py-1 bg-green-300 block rounded-sm mx-auto mt-10">{!isShow ? 'See More' : 'See Less'}</button>
                    }
                </div>
            }
            <ToastContainer />
        </div>
    );
};

export default Favorites;