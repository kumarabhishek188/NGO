import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  return (
    <section className="hero-section text-center d-flex align-items-center bg-light" style={{ minHeight: "80vh" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 fw-bold mb-3">Welcome to <span className="brand-highlight">Basti Ki Pathshala</span></h1>
            <p className="lead mb-4">
              Empowering underprivileged children with the light of education.<br/>
              Join our mission to make quality learning accessible to every child in need!
            </p>
            <Button variant="success" size="lg" href="#volunteer">Become a Volunteer</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
