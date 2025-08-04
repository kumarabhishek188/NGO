import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";

// Dummy image URL (same as above for demo purposes)
const dummyImage1= "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=600&q=80";
const dummyImage2 = "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80";
const dummyImage3 = "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80";


const galleryImages = [
  { src: dummyImage1, alt: "Children studying outdoors" },
  { src: dummyImage2, alt: "Children outdoors" },
//   { src: "", alt: "Placeholder for classroom" }, // Will show icon
  { src: dummyImage3, alt: "Outdoor group activity" }
];

function GallerySection() {
  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="brand-highlight text-center mb-4">Our Gallery</h2>
        <Row>
          {galleryImages.map((img, i) => (
            <Col md={4} sm={6} xs={12} key={i} className="mb-4">
              <Card className="shadow h-100 d-flex align-items-center justify-content-center">
                {img.src ? (
                  <Card.Img
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover"
                    }}
                  />
                ) : (
                  <FaChalkboardTeacher
                    size={100}
                    style={{ color: "#b2dfdb", margin: "3rem 0" }}
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default GallerySection;
