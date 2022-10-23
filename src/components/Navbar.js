import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import defautlProfilePic from '../assets/defautlProfilePic.webp';
import logo from '../assets/logo.png';
import { AuthContext } from "../context/UserContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const signOut = () => {
        logOut().then(() => {
            navigate('/');
        }).catch(() => {

        })
    }
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto pt-4 text-white'>
            <div>
                <img className="rounded-xl" height={100} width={100} src={logo} alt="" />
            </div>
            <div>
                <ul className="flex gap-3 items-center">
                    <Link to='/'>Home</Link>
                    <Link to='/hotels'>Hotels</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                {user && <><p>Welcome {user?.displayName ? user?.displayName : 'User'}</p>
                <img className="w-[30px] h-[30px] rounded" src={user?.photoURL ? user.photoURL : defautlProfilePic} alt="" /></> }

                <ul className="flex gap-3 items-center">
                    {
                        user ? <Link className="bg-red-500 px-3 py-1 rounded-xl text-center" onClick={signOut}>Log Out</Link> : <div className="bg-green-500 px-3 py-1 space-x-3 rounded-xl text-center"><Link to='/login'>Login</Link>
                            <Link to='/register'>Register</Link> </div>
                    }


                </ul>
            </div>
        </div>
    );
};

export default Navbar;