import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';

function VolunteerForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true); // For demo, no server
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={7}>
            <h2 className="mb-4 brand-highlight text-center">Volunteer With Us</h2>
            <Card className="shadow">
              <Card.Body>
                {submitted && (
                  <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    Thank you for your interest! We'll contact you soon.
                  </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control required name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Tell us why you'd like to volunteer</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} placeholder="Your message" />
                  </Form.Group>
                  <Button variant="success" type="submit" className="w-100 mt-2">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default VolunteerForm;
