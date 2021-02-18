import React from 'react'

import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M02/16thFebPD/D20414286_IN_WLME_SamsungGalaxy_M02_New_Launch_DesktopTallHero_1500x600._CB660087901_.jpg" alt=""/>

                <div className="home__row">
                    <Product id={1} title="Oppo A31 (Fantasy White, 6GB RAM, 128GB Storage)" price="11.99" image="https://images-na.ssl-images-amazon.com/images/I/61CnyJ-IbML._SX679_.jpg" rating={3} />
                    <Product id={2} title="Upto 60% off on Baby Products" price="12.56" image="https://images-na.ssl-images-amazon.com/images/I/51SZb4nDkUL._SY879_.jpg" rating={4} />                    
                </div>

                <div className="home__row">
                    <Product id={3} title="Upto 60% off on Breathable Cotton Masks" price="10.00" image="https://images-na.ssl-images-amazon.com/images/I/91I0DxCtqYL._UL1500_.jpg" rating={1} />
                    <Product id={4} title="Itel A47 | Dual Rear Camera | Just Launched" price="13.25" image="https://images-na.ssl-images-amazon.com/images/I/71DKUTV8tML._SX679_.jpg" rating={2} />
                    <Product id={5} title="OFIXO 100 pcs A4 Sheets Square Double Sided Colored Origami" price="7.56" image="https://images-na.ssl-images-amazon.com/images/I/51exUnvK6GL.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id={6} title="Sirona Reusable Menstrual Cup for Women - Large" price="4.56" image="https://images-na.ssl-images-amazon.com/images/I/81X5MV7FNjL._SX679_.jpg" rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
