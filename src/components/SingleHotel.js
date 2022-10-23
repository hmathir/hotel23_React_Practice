
const SingleHotel = ({ hotel }) => {
    const { name, fare, image, rating, roomType } = hotel;
    return (
        <div className="mt-10">
            <div className="card h-full bg-base-100 shadow-xl">
                <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fare: {fare}/Day</div>
                        <div className="badge badge-outline">Rating: {rating}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Room Type: {
                            roomType.map((room, index) => <p key={index} className="mr-1">{room + '.'}</p>)
                        }</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;