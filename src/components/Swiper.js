import { useLoaderData } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Swipere = () => {
    const hotels = useLoaderData();
    console.log(hotels);

    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {hotels.map(hotel => <SwiperSlide><img className='w-[250px] h-[350px] rounded-xl' src={hotel.image} alt="" /></SwiperSlide>)}
      </Swiper>
    );
};

export default Swipere;