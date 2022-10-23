



const HomeSlider = ({ hotel }) => {
    const { image, id } = hotel;


    const imageClick = (id) => {
        console.log('Click', id);

    }
    return (
        <div onClick={() => imageClick(id)} className="carousel-item">
            <img src={image} className="rounded-box" alt="/"/>
        </div>
    );
};

export default HomeSlider;