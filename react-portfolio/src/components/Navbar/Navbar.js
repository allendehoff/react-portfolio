import React from "react";

function Nav() {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a href="/" className="navbar-brand">Allen DeHoff</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-md-auto">
                    <a className="nav-item nav-link" href="/">About Me</a>
                    <a className="nav-item nav-link" href="/portfolio">Portfolio</a>
                    <a className="nav-item nav-link" href="/contact">Contact</a>
                </div>
            </div>
        </header>


        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <a className="navbar-brand" href="/">
        //         Allen DeHoff
        //     </a>

        // </nav>
    );
}

export default Nav;
