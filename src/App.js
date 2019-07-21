import React from 'react';
import 'normalize.css'
import classes from './App.scss'

import Navbar from './Containers/Navbar'
import Header from './Containers/Header'
import Menu from './Containers/Menu'
import FeaturedDishes from './Containers/FeaturedDishes'
import Gallery from './Containers/Gallery'
import Footer from './Containers/Footer'

export default () => (
    <div className={classes.app}>
        <Navbar/>
        <Header/>
        <Menu/>
        <FeaturedDishes/>
        <Gallery/>
        <Footer/>
    </div>
);