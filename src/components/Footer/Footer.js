import React from "react"
import "./style.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <span className="justify-content-center text-muted">&copy; Allen DeHoff 2020</span>
                <a href="https://www.linkedin.com/in/allen-dehoff-30567819b/">LinkedIn</a>
                <a href="https://github.com/allendehoff">GitHub</a>
                <a href="mailto:allen.dehoff21@gmail.com">Email</a>
                <span>804-245-1904</span>
            </div>
        </footer>
    )
}

export default Footer