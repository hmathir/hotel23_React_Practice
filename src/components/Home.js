import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "./HomeSlider";

const Home = () => {
    const hotels = useLoaderData();
    return (
        <div className="w-11/12 mx-auto flex justify-between mt-40" >
            <div className="text-center">
                <h1 className="text-white text-4xl mt-20">What are you looking for?</h1>
                <p className="text-white text-3xl mt-6">Just <span className="bg-red-500 rounded-xl text-5xl px-2">Put your Lugges</span> NOW!</p>
                <Link to='/search'>
                    <button className="px-4 py-2 bg-red-500 text-white mt-6">Book Now</button>
                </Link>
            </div>

            {/* <div className="flex w-11/12 mx-auto"> */}
            <div className="carousel carousel-center max-w-md space-x-4 bg-neutral rounded-box h-[300px]">
                
                {
                    hotels.map(hotel => <HomeSlider key={hotel.id} hotel={hotel}></HomeSlider>)
                }
            </div>
        </div>

    );
};

export default Home;