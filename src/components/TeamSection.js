import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

// Dummy image URL (you can save this or use any placeholder service for demo)
const dummy1 = "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80";
const dummy2 = "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80";
const dummy3 = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=500&q=80";

const team = [
  { name: "MR. Raj", role: "Founder", img: dummy1 },
  { name: "Rani Sharma", role: "Co-Founder", img: dummy2 },
  { name: "Dr. Alexender", role: "Coordinator", img: dummy3 }
];

function TeamSection() {
  return (
    <section id="team" className="py-5">
      <Container>
        <h2 className="brand-highlight text-center mb-4">Meet Our Team</h2>
        <Row>
          {team.map((member, i) => (
            <Col md={4} sm={6} xs={12} key={i} className="mb-4">
              <Card className="shadow h-100 text-center">
                {member.img ? (
                  <Card.Img
                    src={member.img}
                    alt={member.name}
                    variant="top"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      margin: "1rem auto 0",
                      borderRadius: "50%"
                    }}
                  />
                ) : (
                  <FaUserCircle
                    size={180}
                    style={{ color: "#cfd8dc", margin: "1rem auto 0" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text className="text-muted">{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default TeamSection;
