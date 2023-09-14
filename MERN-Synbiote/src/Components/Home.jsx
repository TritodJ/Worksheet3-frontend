import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center">Welcome to DEMO</h1>
                            <p className="lead text-center fs-4 mb-5">DEMO</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <NavLink className="btn btn-outline-success ms-2 px-4 rounded-pill btn-lg btn-block " to="/addbook">DEMO</NavLink>
                                <NavLink className="btn btn-outline-success ms-2 px-4 rounded-pill btn-lg btn-block" to="/booklist">DEMO</NavLink>
                                <NavLink className="btn btn-outline-success ms-2 px-4 rounded-pill btn-lg btn-block" to="/bookrecord">DEMO</NavLink>
                                <NavLink className="btn btn-outline-success ms-2 px-4 rounded-pill btn-lg btn-block" to="/editbook">DEMO</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;