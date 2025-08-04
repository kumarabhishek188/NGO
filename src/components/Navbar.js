import React from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
          <span role="img" aria-label="book" style={{ fontSize: '1.5em' }}>
            📚
          </span>{' '}
          {t('Basti Ki Pathshala')}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-items" />
        <Navbar.Collapse id="navbar-items">
          <Nav className="ms-auto">
            <Nav.Link href="#home">{t('Home')}</Nav.Link>
            <Nav.Link href="#about">{t('AboutUs')}</Nav.Link>
            <Nav.Link href="#volunteer">{t('Volunteer')}</Nav.Link>
            <Button
              onClick={toggleLang}
              variant="outline-success"
              size="sm"
              style={{ marginLeft: '1rem' }}
            >
              {i18n.language === 'en' ? 'हिन्दी' : 'EN'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
