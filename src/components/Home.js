import React from 'react'

const Home = () => {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>

                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                       <img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="..." />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                            <img className="img-fluid" src="assets/img/portfolio/cake.png" alt="..." />
                        </div>

                    <div className="col-md-6 col-lg-4 mb-5">
                        <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="..." />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <img className="img-fluid" src="assets/img/portfolio/game.png" alt="..." />
                    </div>

                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="..." />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Home;