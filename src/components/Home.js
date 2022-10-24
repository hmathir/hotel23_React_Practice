import { useState } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
    const places = useLoaderData();
    const [title, setTitle] = useState(null);
    const [setBackgroundImage] = useOutletContext();
    const [swiper, setSwiper] = useState({});


    return (
        <div className="h-screen mx-auto flex justify-between items-center">
            <div className=" w-6/12 mx-auto text-center">
                <h1 className="text-white text-4xl">What are you looking for?</h1>
                <p className="text-white text-3xl mt-6">Just <span className="bg-red-500 rounded-xl text-5xl px-2">Put your Lugges</span> NOW!</p>
                <Link to='/search'>
                    <button className="px-4 py-2 bg-red-500 text-white mt-6">Book Now</button>
                </Link>
                <p className="text-4xl text-white">{title}</p>
            </div>
            <div className="w-5/12">
                <Swiper
                    onInit={(event) => {
                        setSwiper(event)
                    }}
                    spaceBetween={10}
                    slidesPerView={2.5}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    
                >
                    {places.map((place, index) => <SwiperSlide key={index} onClick={() => { (setTitle(place.PlaceName)); setBackgroundImage(place.Image) }}>
                        <div className="">
                            <img className=' w-[400px] h-[350px] rounded-xl' src={place.Image} alt="" />
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                <div className="text-white space-x-2 mt-5">
                <button className="border border-white rounded-3xl p-2" onClick={()=>swiper.slidePrev()}> {'<'} </button>
                <button className="border border-white rounded-3xl p-2" onClick={()=>swiper.slideNext()}> {'>'} </button>
                </div>
            </div>

        </div>

    );
};

export default Home;