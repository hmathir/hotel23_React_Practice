import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import background from '../assets/background.jpg';
import { AuthContext } from "../context/UserContext";

const Register = () => {
    const { SignUpUsingEmail, verifyEmailAddress } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailVerify = () => {
        verifyEmailAddress().then(() => {
        });
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        SignUpUsingEmail(email, password)
            .then((results) => {
                const user = results.user;
                form.reset();
                emailVerify();
                if(user?.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    navigate('/verify');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    
    // useEffect(()=>{

    // },[from,navigate,user])

    return (
        <div className='h-screen flex justify-center items-center' style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "overlay", backgroundColor: 'rgba(0, 0, 0, 0.4)', }}>
            <div className="md:w-5/12 mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <div className="bg-red-500 rounded-xl text-white text-center px-3">
                        <Link to='/'>Home</Link>
                    </div>
                </div>
                <form onSubmit={handleSignUp} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-400">Email</label>
                        <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 bg-violet-400">Sign Up</button>
                </form>
                <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                    <Link rel="noopener noreferrer" to='/login' className="dark:text-gray-100 text-red-600 font-bold"> Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;