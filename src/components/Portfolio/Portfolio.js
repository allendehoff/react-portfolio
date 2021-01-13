import React from "react"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "../Card/Card"
import CritterSitterPic from "../../images/Critter-Sitter.png"
import TripPlannerPic from "../../images/tripPlanner.gif"
import BurgerRestaurantPic from "../../images/eatDaBurger.gif"

function Portfolio() {
    return (
        <div className="container">
            <section className="row ">
                <div className="col-lg-12 d-flex justify-content-center">
                    <h1 className="mt-5">Portfolio</h1>
                </div>
            </section>
            <hr className="my-4"/>
            <CardDeck>
                <Card
                img={CritterSitterPic}
                name="Critter Sitter"
                text="This application allows a pet owner and pet sitter easily communicate about the status of the pet and updates regarding the owner's trip."
                github="https://github.com/allendehoff/Critter-Sitter"
                link="https://critter-sitter2020.herokuapp.com/"
                />
                <Card
                img={TripPlannerPic}
                name="Trip Planner"
                text="This Application helps a user to plan a road trip including directions to their destination, local hotels, and restaurants near their hotel."
                github="https://github.com/allendehoff/Project1"
                link="https://allendehoff.github.io/Trip-Planner/"
                />
                <Card
                img={BurgerRestaurantPic}
                name="Burger Restaurant"
                text="This Application allows a user to enter names of burgers they want to eat and mark them as eaten."
                github="https://github.com/allendehoff/Burger-Restaurant"
                link="https://burger-eater-2020.herokuapp.com/"
                />
            </CardDeck>
        </div>
    )
}

export default Portfolio