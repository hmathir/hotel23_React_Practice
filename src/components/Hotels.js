import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import SingleHotel from "./SingleHotel";
import VerifyEmail from "./VerifyEmail";

const Hotels = () => {
    const hotels = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <>
        {user.emailVerified ? <div>
                <div className="flex w-11/12 mx-auto py-10 gap-6">
                    <div className="grid w-6/12 grid-cols-2 gap-4">
                        {
                            hotels.map(hotel => <SingleHotel key={hotel.id} hotel={hotel}></SingleHotel>)
                        }
                    </div>
                    <div className="w-6/12">
                        <iframe className=" h-full w-full py-10 rounded-xl " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.46483224664!2d90.39596332509458!3d23.778875853203523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1666508454502!5m2!1sen!2sbd" title="map" ></iframe>
                    </div>
                </div>
            </div> : <VerifyEmail></VerifyEmail>}
            </>


    );
};

export default Hotels;