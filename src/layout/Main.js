import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import background from '../assets/background.jpg';
import Navbar from '../components/Navbar';
const Main = () => {
    const [backgroundImage, setBackgroundImage] = useState(background);
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "overlay", backgroundColor: 'rgba(0, 0, 0, 0.4)',}}>
            <Navbar></Navbar>
            <Outlet context={[setBackgroundImage]}></Outlet>
        </div>
    );
};

export default Main;