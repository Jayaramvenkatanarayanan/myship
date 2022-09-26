import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Order() {
  return (
    <Container className="dashboard">
      <Row>
        <Col>
          <Form.Label htmlFor="basic-url">OrderId</Form.Label>
          <InputGroup className="md">
            <Form.Control
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Order ID"
            />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label htmlFor="basic-url">Order Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Order Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col className="dashboardForm">
          <Form.Label htmlFor="basic-url">Pickup From</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Order Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
        <Col></Col>
      </Row>

      <Card>
        <Card.Header>Consigner Information</Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Form.Label htmlFor="basic-url">Consigner Name</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Consigner</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label htmlFor="basic-url">Phone Number</Form.Label>
              <InputGroup className="md">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Phone Number"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="dashboardFormTxt">
              <Form.Label htmlFor="basic-url">Pincode</Form.Label>
              <InputGroup className="md">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Pincode"
                />
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="basic-url">City</Form.Label>
              <InputGroup className="md">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="City"
                />
              </InputGroup>
            </Col>
            <Col>
              <Form.Label htmlFor="basic-url">State</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>select Consigner</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col className="dashboardFormTxt">
              <Form.Label htmlFor="basic-url">Pincode</Form.Label>
              <InputGroup className="md">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="Pincode"
                />
              </InputGroup>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="dashboardFormTxt">
              <Form.Label htmlFor="basic-url">GST No</Form.Label>
              <InputGroup className="md">
                <Form.Control
                  id="basic-url"
                  aria-describedby="basic-addon3"
                  placeholder="GST No"
                />
              </InputGroup>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Consigner Address </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row className="dashboardFormTxt">
        <Col>
          <Button variant="primary" size="lg">
            Create Order
          </Button>{" "}
          <Button variant="danger" size="lg">
            Cancel
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
