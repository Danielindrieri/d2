import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-3">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Siamo un'azienda che fornisce i migliori libri per ogni esigenza.
              Qualità e passione per la lettura sono i nostri valori.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact</h5>
            <p>Email: info@example.com</p>
            <p>Telefono: +39 123 456 789</p>
            <p>Indirizzo: Via Roma 1, Milano</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Azienda a caso . Tutti i diritti riservati di qualcuno.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

