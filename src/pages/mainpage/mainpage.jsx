import React from 'react';  
import PrimarySearchAppBar from '../../components/header/header.component'
import Slideshow from '../../components/slideshow/slideshow.component';
import Footer from '../../components/footer/footer.componet';  
import HomePage from '../homepage/homepage.component';

const MainPage = () =>(

    <div>
    <PrimarySearchAppBar />
    <Slideshow />
    <HomePage/>
    <Footer />
    </div>

);


export default MainPage;

