import React from "react";
import { Carousel } from "react-bootstrap";
import Holder from "holderjs";

class Instructions extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="	./images/information.jpg"
            alt="Second"
            style={{
              objectFit: "contain",
              height: "250px",
              backgroundColor: "lightgreen"
            }}
          />
          <div
            style={{
              textAlign: "center",
              backgroundColor: "lightgreen"
            }}
          >
            <h3>
              {" "}
              <a href="https://www.walgreens.com/topic/findcare/coronavirus.jsp?ban=covidvaccineLP_covidinfoLP_fy21">
                COVID Information
              </a>
            </h3>
            <p className="ins">
              The COVID-19 pandemic is an ongoing global pandemic of coronavirus
              disease 2019 (COVID-19), which is caused by severe acute
              respiratory syndrome coronavirus 2 (SARS-CoV-2).{" "}
            </p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="	./images/vaccine.jpg"
            alt="Second"
            style={{
              objectFit: "contain",
              height: "250px",
              backgroundColor: "lightgreen"
            }}
          />
          <div
            style={{
              textAlign: "center",
              backgroundColor: "lightgreen"
            }}
          >
            <h3>
              <a href="https://www.vaccines.gov/">Vaccination</a>
            </h3>
            <p className="ins">
              A COVID‑19 vaccine is a vaccine intended to provide acquired
              immunity against COVID-19. Prior to the COVID-19 pandemic, work to
              develop a vaccine against the coronavirus diseases SARS and MERS
            </p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="im"
            className="d-block w-100"
            src=" ./images/testing.jpg"
            alt="Third"
            style={{
              objectFit: "contain",
              height: "250px",
              backgroundColor: "#b0e0e6"
            }}
          />
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#b0e0e6"
            }}
          >
            <h3>
              <a href="https://www.walgreens.com/topic/promotion/covid-testing.jsp?ban=covidvaccineLP_testinginfoLP_fy21">
                Testing Information
              </a>
            </h3>
            <p className="ins">
              COVID Test Consist Diagnostic Lab Test (PCR) RT-PCR Diagnostic
              Panel Test,Rapid Diagnostic Test Rapid Molecular Test ,Rapid
              Antigen Test Rapid Antigen Test
            </p>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Instructions;
