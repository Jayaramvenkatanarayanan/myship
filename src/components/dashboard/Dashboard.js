import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Reports",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Company Name",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Service Provider",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <Container className="dashboard">
      <Row className="justify-content-md-center">
        <Col>
          <h3>Shipment Details</h3>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              <Link to="/Order" className="btnColor">
                New Order
              </Link>
            </Button>
          </div>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Parcel-ID</th>
                <th>Company Name</th>
                <th>Service Provider</th>
                <th>From-Pincode</th>
                <th>To-Pincode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>554-998-898</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>641041</td>
                <td>641001</td>
              </tr>
              <tr>
                <td>2</td>
                <td>554-998-87798</td>
                <td>Otto2</td>
                <td>@mdo</td>
                <td>641041</td>
                <td>641001</td>
              </tr>
              <tr>
                <td>3</td>
                <td>554-998-8779w8</td>
                <td>Otto3</td>
                <td>@mdo</td>
                <td>641041</td>
                <td>641001</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Row>
          <Col>
            <Bar options={options} data={data} />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
