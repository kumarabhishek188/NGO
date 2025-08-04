import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AboutUs() {
  return (
    <section id="about" className="about-section py-5 scroll-target">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4 text-center brand-highlight">About Us</h2>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Text style={{ fontSize: '1.15rem' }}>
                  <b>Basti Ki Pathshala</b> is a grassroots NGO dedicated to bringing education to the doorsteps of marginalized children in urban and rural communities. Founded by passionate volunteers, our open-air classrooms ignite curiosity, provide mentoring, and support holistic development.<br/><br/>
                  <b>Our Mission:</b> To foster a love for learning and provide meaningful educational resources, helping children rise above socio-economic barriers.<br/><br/>
                  We believe that every effort counts. Your involvement—as a volunteer, donor, or supporter—helps us shape a brighter future.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
