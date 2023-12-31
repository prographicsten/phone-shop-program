import { Link, json } from "react-router-dom";
import swal from "sweetalert";

const PhoneCard = ({phone}) => {
    const {brand_name, id, image, phone_name, price, rating} = phone || {};

    const handleAddToFavorites = () => {
        // console.log(phone);
        const addedFavoritesArray = [];
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'));

        if (!favoritesItems) {
            addedFavoritesArray.push(phone);
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
            swal("Good job!", "Product added succesfully", "success");
        }else {
            const isExists = favoritesItems.find(phone => phone.id === id);
            // console.log(isExists);

            if(!isExists) {
                addedFavoritesArray.push(...favoritesItems, phone);
                localStorage.setItem('favorites', JSON.stringify(addedFavoritesArray));
                swal("Good job!", "Product added succesfully", "success");
            }else{
                swal("Error!", "No Duplicated allow", "error");
            }

        }

        // console.log(favoritesItems);
        // localStorage.setItem('favorites', JSON.stringify([phone]));
    };

    return (
        <div className="md:mb-5">
            <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    class="h-full w-full object-cover"
                    />
                </div>
                <div class="p-6">
                    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {brand_name}
                    </h6>
                    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone_name}
                    </h4>
                    
                    <Link class="inline-block" href="#">
                    <button onClick={handleAddToFavorites}
                        class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Add Favorites
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        class="h-4 w-4"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PhoneCard;