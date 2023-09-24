import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
    const [phone, setPhone] = useState({});

    const {id} = useParams();
    // console.log(id);

    const phones = useLoaderData();
    // console.log(phones);

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id);
        // console.log(findPhone);
        setPhone(findPhone);
    }, [id, phones]);

    // console.log(phone);

    return (
        <div className="py-10 flex justify-center h-[80vh] items-center">
            <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;