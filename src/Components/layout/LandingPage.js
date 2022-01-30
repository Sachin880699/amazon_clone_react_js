import React from 'react';
import NavbarContainer from "./Navbar/NavbarContainer"
import Imageslider from './ImageSlider';
import Homepageproductcontainer from '../HomePageProduct/HomePageProductContainer';
import Footer from './Footer';
const Landingpage = () => {
    return (
        <>
        <NavbarContainer />
        <div class="container-fluid px-0">
            <Imageslider/>
            <Homepageproductcontainer/>
        </div>
        <Footer/>
        </>
    );
}

export default Landingpage;
