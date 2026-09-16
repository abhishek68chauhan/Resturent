import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">About Us</h1>
                        <p>The only thing we are serious about is food.</p>
                    </div>
                    <p className="mid">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni in sint, cumque necessitatibus harum quis nihil, qui pariatur laudantium incidunt odit laboriosam repellendus! Corrupti velit, commodi iste tenetur accusamus eum.
                    </p>
                    <Link to={"/"}>
                    Explore Menu{" "}
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKC-Syp1jVnki5JIg-3IWI6LIkl96a7aDqLgkQultK1w&s=10" alt="about" />
                </div>
            </div>
        </section>
    );
};

export default About;