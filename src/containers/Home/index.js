/**
 *
 * Home
 *
 */

import React from 'react';

import H1 from '../../components/H1';
import Img from '../../components/Img';
import classes from './index.module.css';
import Footer from '../../components/Footer';

import img from '../../assets/img/img1_home.jpg';
import imageHK from '../../assets/img/image1_aboutUs.jpg';
import imageModel from '../../assets/img/img2_home.jpg';

function Home() {
  return (
    <div>
      <div className="page-wrapper" id="about-page">
        <div className="cover-wrapper">
          <Img src={img} alt="cover" />
        </div>
        <div className={classes.informationWrapper}>
          <div className="container">
            <div className="container">
              <div className={classes.eachPart}>
                <div className="row">
                  <div className="col col-lg-6">
                    <div className="text-section">
                      <br />

                      <ul className="list-group list-group-flush">
                        <H1 className={classes.subHeader1_Red}>
                          Sustainable Finance
                        </H1>
                        <li className="list-group-item">
                          {' '}
                          We provide an overview information of all company
                          listed in HKEX.
                        </li>
                        <li className="list-group-item">
                          {' '}
                          Our focus are on ESG: Environmental, Social, and
                          Governance.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <img
                      id={classes.imageHolder}
                      src={imageModel}
                      alt="Model"
                    />
                  </div>
                </div>
              </div>

              <div className={classes.eachPart}>
                <div className={classes.subHeaderContainer}>
                  {/* <div className={classes.subHeader1}>Our Business</div> */}

                  <div className={classes.subHeader2_white}>
                    We evaluate companies based on
                  </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Operational
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Compliance
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Community Impact
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Diversity & Inclusion
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Social Media
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card" id={classes.styledCard}>
                      <div className="card-body">
                        <h5 className="card-title" id={classes.subHeader3}>
                          Environmental
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
