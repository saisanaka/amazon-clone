import React from 'react';
import './Home.css'
import Product from './Product'

function Home () {
    return(
        <div className='home'>
            <div className='home__a'>
            <img className='home__logo' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>
            </div>
            <div className='home__row'>
                <Product  title = "This is information of the product and i'm currently testing the product" 
                price={11.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
                <Product id={12121} title = "Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers (Black)" 
                price={29.37} rating={2} image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_SY450_.jpg" />
                    
            </div>
            <div className='home__row'>
                <Product id={12121} title = "WOOSEA Women's High Neck Split Bodycon Mermaid Evening Cocktail Long Dress" 
                price={39.99} rating={5} image="https://m.media-amazon.com/images/I/51ncfl1Kt1L._AC_UY445_.jpg" />
                <Product id={12122}title = "This is information of the product and i'm currently testing the product" 
                price={15.99} rating={2} image="https://m.media-amazon.com/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg" />
                <Product id={12122}title = "Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne Pimple Patch for Covering Zits and Blemishes, Spot Stickers for Face and Skin, Vegan-friendly and Not Tested on Animals (36 Count)" 
                price={1.99} rating={2} image="https://m.media-amazon.com/images/I/41O3SOVUBJL._SL1080_.jpg" /> 
                <Product id={12122}title = "Neutrogena Makeup Remover Cleansing Face Wipes, Daily Cleansing Facial Towelettes to Remove Waterproof Makeup and Mascara, Alcohol-Free, Value Twin Pack, 25 Count, 2 Pack" 
                price={117.99} rating={2} image="https://m.media-amazon.com/images/I/71V9rJ7roDL._AC_UL480_QL65_.jpg" /> 
            </div>

            <div className='home__row'>
                <Product  title = 'Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6" Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard'
                price={511.99} rating={5} image="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX522_.jpg" />
                <Product id={12121} title = "Tripp Lite PoE to USB Micro-B and RJ45 Active Splitter 48V to 5V 1A 100M (NPOE-SPL-G-5VMU)" 
                price={29.37} rating={4} image="https://m.media-amazon.com/images/I/41uReX8Pc3L._AC_SX522_.jpg" />
                <Product id={12121} title = "DeskCycle Under Desk Bike Pedal Exerciser - Portable Foot Exercise Cycle for Sitting with LCD Display - Mini Stationary Peddler for Adults & Seniors, Physical Therapy Workout Equipment" 
                price={229.37} rating={4} image="https://m.media-amazon.com/images/I/71pSooYfwQL._AC_UL480_FMwebp_QL65_.jpg" />  
            </div>

            <div className='home__row'>
                <Product id={12121} title = 'Amazon Fire TV 65" Omni Series 4K UHD smart TV with Dolby Vision, hands-free with Alexa'
                price={229.37} rating={4} image="https://m.media-amazon.com/images/I/51EBhwkD+kL._AC_UY327_FMwebp_QL65_.jpg" />  
            </div>
            
        </div>
    );
}

export default Home;