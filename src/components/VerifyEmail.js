import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const VerifyEmail = () => {
    const {verifyEmailAddress,user} = useContext(AuthContext);
    console.log(user);

    const resendVerificationEmail = () => {
        verifyEmailAddress().then(()=>{})
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-white font-bold w-11/12 text-center">
                <h1 className="text-4xl mt-10">Please Verify Your Email.</h1>
                <p className="text-2xl">Did Not Recieved Yet?</p>
                <p className="text-2xl">Check Your <span className="text-yellow-300">Spam</span> Folder Or <span className="text-red-500 "> <button onClick={resendVerificationEmail} className="underline">Resend Again!</button></span></p>
                <div><h1>Already Verified? <a href='/hotels' >Click Here</a></h1></div>

            </div>
        </div>


    );
};

export default VerifyEmail;