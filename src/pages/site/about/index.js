import React from "react";
import { Button, Accordion, Card, Col, Container, Row } from "react-bootstrap";
import Holder from "holderjs";
import Components from "../../components";
// Remove it when you'll embed a suitable image
let corona = "holder.js/700x400?text=Corona Count&bg=373940";

// Two components #NavBar and #Footer are added
// You can comment them during trial if you want

class About extends React.Component {
  render() {
    return (
      <>
        <Components.NavBar />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="main-heading"> About Us</h3>
                <div className="underline1 mx-auto"></div>
              </div>
              <p className="text">
                COVID-19 SOS a unique portfolio of services that keep healthcare
                professionals which fulfilling Emergency Needs of COVID
                Patients.The Mission of COVID-19 SOS is to Improve the Health of
                Community and the World by setting the standard of Excellence in
                Our Service. In this Emerging Pandemic Situation COVID-19 Our
                Team Provide Help to Covid patients. We fulfill the requirements
                of Medicine and Provide Faster service to COVID Positive
                Patients in the Pandemic situation of COVID-19. We Provide
                Oxygen Cylinder , Plasma, Remdesivir Injection and Medicines. We
                Organize Vaccination Camp for the HealthCare of People.Thousand
                of COVID Patients are Recovered by Our Services.We are Awarded
                By 3 National Government Organizations.
              </p>
              <div className="col-md-12 text-center">
                <button className="button">Read More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-c-light border-top">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5 text-center">
                <h3 className="main-heading"> Vision Mission and Values</h3>
                <div className="underline mx-auto"></div>
              </div>
              <div className="col-md-4 text-center">
                <h6 className="a">Our Vision</h6>
                <p className="text1">
                  To help Patients meet the needs of individual and Families
                  through cordinate Effective Prevention Services
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h6 class="a">Our Mission</h6>
                <p className="text1">
                  To Promote the Healthy Development for Individual Families
                  through Research and Fight Against Covid-19
                </p>
              </div>
              <div className="col-md-4 text-center">
                <h6 class="a ">Our Core Values</h6>
                <p className="text1">
                  Inclusive Healthy and Safetiness Environment, Integrity,
                  Honesty, Respect, People Oriented and Ethically Interaction{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section footer bg-white text-dark ">
          <div className="container  " className="t">
            <div className="row">
              <div className="col-md-4  ">
                <h6 className="a ">Our Associations</h6>
                <hr />
                <div>
                  {" "}
                  <p className="text-black mb-1">KVL Foundation</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">Vaccination kentra</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">NGO</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">Safe India</p>
                </div>
              </div>
              <div className=" col-md-4">
                <h6 className="a">Quick Links</h6>
                <hr />
                <div>
                  {" "}
                  <a href="#a" className="b">
                    LinkedIn
                  </a>
                </div>
                <div>
                  {" "}
                  <a href="https://www.vaccines.gov/">Twitter</a>
                </div>
                <div>
                  {" "}
                  <a href="https://www.mygov.in/covid-19">Github</a>
                </div>
                <div>
                  {" "}
                  <a href="#a">Facebook</a>
                </div>
              </div>
              <div className="col-md-4">
                <h6 className="a">Contact Information</h6>
                <hr />
                <div>
                  {" "}
                  <p className="text-black mb-1">Team 12</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">+91 7728041197</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">team12@gmail.com</p>
                </div>
                <div>
                  {" "}
                  <p className="text-black mb-1">Jodhpur, Rajasthan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
