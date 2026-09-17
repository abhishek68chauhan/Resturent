import React from "react";
import Navbar from "./Navebar";
const HeroSection = () => {
    return (
        <section className="hero-section" id="heroSection">
            <Navbar />
            <div className="container">
                <div className="banner">
                    <div className="largeBox">
                        <h1 className="title">Delicious</h1>
                    </div>
                    <div className="combineBox">
                        <div className="imageBox">
                            <img src="./hero1.png" alt="hero1" />
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className="title">Food</h1>
                                <h1 className="title dishes_title">Dishes</h1>
                                <img src="./threelines.svg" alt="hero2" />
                            </div>
                            <img className="logo" src="logo.svg" alt="hero4" />
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="imageBox">
                        <img src="hero2.png" alt="hero4" />
                    </div>
                    <h1 className="title dishes_title">Dishes</h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;