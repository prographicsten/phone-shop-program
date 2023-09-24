import PhonesCart from "./PhonesCart";


const Phones = ({phones}) => {
    // console.log(phones);

    return (
        <div>
            <h1 className="text-xl text-center font-semibold pt-10">All categories phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
            {
                phones?.map((phone, idx) => <PhonesCart key={idx} phone={phone}></PhonesCart>)
            }
            </div>
        </div>
    );
};

export default Phones;