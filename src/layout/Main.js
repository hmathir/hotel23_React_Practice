import { Outlet } from 'react-router-dom';
import background from '../assets/background.jpg';
import Navbar from '../components/Navbar';
const Main = () => {
    return (
        <div className='h-screen' style={{  backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundBlendMode: "overlay", backgroundColor: 'rgba(0, 0, 0, 0.4)',}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;