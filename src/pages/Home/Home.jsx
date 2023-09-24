import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Navbar/Banner/Banner";
import Phones from "../../components/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();
    // console.log(phones);

    return (
        <div className="py-10">
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;