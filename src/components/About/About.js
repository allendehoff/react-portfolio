import React from "react"
import ProfilePicture from "../../images/ProfilePicture.jpeg"
// import "./style.css"

function About() {
    return (
        <div className="container">
            <section className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                    <h1 className="mt-5">About Me</h1>
                </div>
            </section>
            <hr className="my-4" />
            <section className="row aboutrow">
                <div className="col-lg-3 picCol">
                    <img src={ProfilePicture} alt="Profile Picture" className="img-fluid" />
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h2>Who is Allen DeHoff?</h2>
                            <p>Originally from Virginia, I have lived around the country and world and currently reside in Wyoming. I am a Marine Corps veteran, former wildland firefighter, and Emergency Medical Technician. After many years of serving my community I took an interest in software development so that I could help people outside of my local community. When I am not working I like to hike, camp, snowboard, BASE jump, and hunt. If you would like to know more, please reach out to me via LinkedIn or by email, links to each are at the bottom of the page. I'm excited to get to know you!</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h2>What Can I Do?</h2>
                            <p>With extensive training and experience in team dynamics and newly developed skills using React, CSS, Javascript, responsive web design, and the MERN stack, I will be able to integrate into your team seamlessly to deliver the maximum value to your company. I am eager to continue learning in order to help your company take advantage of cutting edge technologies and management strategies to bring as much good into the world as possible</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;