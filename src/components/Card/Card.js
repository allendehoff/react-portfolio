import React from "react"
import Card from "react-bootstrap/Card"
import "./style.css"
// import React{ Card } from "react"

function PortfolioCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img} className="cardImage" />
            <Card.Body>
                <Card.Title>
                    {props.name}
                </Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href={props.github}>GitHub</a>
                <a href={props.link}>Deployed Application</a>
            </Card.Footer>
        </Card>
    )
}

export default PortfolioCard