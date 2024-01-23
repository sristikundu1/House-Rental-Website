import { useLoaderData } from "react-router-dom";
import HouseCard from "./HouseCard";



const Home = () => {
    const houses = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           {
            houses?.map((allhouse) => <HouseCard

            key={allhouse._id}
            allhouse={allhouse}></HouseCard>
           )}
            
        </div>
    );
};

export default Home;