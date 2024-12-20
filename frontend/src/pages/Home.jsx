import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experiencImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle";

import "../styles/home.css";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImgesGallery from "../components/Image-gallery/MasonryImgesGallery";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nobis provident iure recusandae beatae magnam, incidunt ad
                  impedit hic nam vitae labore molestiae. Sequi quibusdam nihil
                  obcaecati nulla tenetur dolore aliquam!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service_subtitle">What we serve</h5>
              <h2 className="service_title">We offer our best service</h2>
              <p>Explore the most popular destinations</p>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*====================  featured tour start ====================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*====================  featured tour end ====================*/}

      {/*====================  experience section start ====================*/}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />

                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  <br />
                  Nobis provident iure recusandae beatae magnam, incidunt ad
                  impedit hic nam vitae labore molestiae. Sequi quibusdam nihil
                  obcaecati nulla tenetur dolore aliquam!
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>

                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Regular clients</h6>
                </div>

                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experiencImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*====================  experience section end ====================*/}

      {/*====================  gallery section start ====================*/}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImgesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*====================  gallery section end ====================*/}

      {/*====================  testimonial section start ====================*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"fans Love"} />
              <h2 className="testimonial_title">What Our fans say about us</h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/*====================  testimonial section end ====================*/}
    </>
  );
};

export default Home;
