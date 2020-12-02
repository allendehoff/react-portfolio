import React from "react"

function Contact () {
    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <h1 className="mt-5">Contact Me</h1>
            </div>
        </div>
        <hr className="my-4"/>
        <section className="contactform">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" id="InputName" rows="3"/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" id="InputMessage" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    </div>
    )
}

export default Contact