import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HelpModal({ show, onHide }: { show: boolean; onHide: () => void }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Help</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          <li>
            Select the solution language (English, French, German, Portuguese, Spanish)
          </li>
          <li>
            Select the grade, or educational level, for the education level
          </li>
          <li>
            Upload a photo of your homework problem (using your device camera or uploading from your computer)
          </li>
          <li>
            Hit "Generate Solution" to start our magic Homework Helper machine
          </li>
          <li>
            ¡Voila! Out comes a pdf with the step-by-step solutions and a video explanation
          </li>
        </ol>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Header() {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <>
      <header className="sticky-top">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href={import.meta.env.BASE_URL}>
              Homework Helper
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Button type="button" onClick={() => setShowHelp(true)}>
                Help
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <HelpModal show={showHelp} onHide={() => setShowHelp(false)} />
    </>
  );
}

export default Header;
