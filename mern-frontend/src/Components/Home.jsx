import React from 'react';
import About from './About';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center">Welcome to Book Web: Where Stories Come to Life</h1>
                            <p className="lead text-center fs-4 mb-5">Chapter & Verse: Your Literary Journey Starts Here</p>
                            <div className="buttons">
                                <button className="btn btn-;ight me-4 rounded-pill px-4 py-2">Add Book</button>
                                <button className="btn btn-;ight me-4 rounded-pill px-4 py-2">Book List</button>
                                <button className="btn btn-;ight me-4 rounded-pill px-4 py-2">Book's Record</button>
                                <button className="btn btn-;ight me-4 rounded-pill px-4 py-2">Add Book</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;