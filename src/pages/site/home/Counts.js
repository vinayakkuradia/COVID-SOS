import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Bar, Doughnut } from "react-chartjs-2";

const state = {
  labels: ["Active Cases", "Recovered", "Death", "Vaccination"],
  datasets: [
    {
      label: "COVID",
      backgroundColor: ["#eb4c42", "#00ced1", "#fff700", "#00fa9a", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F"
      ],
      data: [65000500, 59017434, 10054230, 20437543]
    }
  ]
};

class Counts extends React.Component {
  render() {
    return (
      <Jumbotron className="jumbotron-fluid jumbotron-counts">
        <h3 className="case">Cases & Data</h3>
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-8 align-self-center">
              <Bar
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 40
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />
            </div>

            <div className="row justify-content-center" className="f">
              <div>
                <h3>Total Cases</h3>
                <p>7,84,960,406</p>
                <h3>Active Cases</h3>
                <p>65,000,500</p>
              </div>

              <div>
                <h3>Total Death</h3>
                <p>10,054,230</p>
                <h3>Total Vaccination</h3>
                <p>20,437,543</p>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Counts;
