import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const events = [
  { 
    title: "Book Donation Drive",
    desc: "Distribute books in local slums - September 14, 2024",
    ongoing: true
  },
  {
    title: "Health Camp",
    desc: "Free medical checkup for children - August 20, 2024",
    ongoing: false
  }
  // More events...
];

const EventsSection = () => {
  const { t } = useTranslation();
  return (
    <section id="events" className="py-5 bg-light">
      <Container>
        <h2 className="brand-highlight text-center mb-4">{t('events.title')}</h2>
        <Row>
          {events.map((ev, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <Card className="shadow h-100">
                <Card.Body>
                  <Card.Title>
                    {ev.title}{" "}
                    {ev.ongoing && <Badge bg="success" className="ms-2">{t('events.ongoing')}</Badge>}
                  </Card.Title>
                  <Card.Text>{ev.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default EventsSection;
