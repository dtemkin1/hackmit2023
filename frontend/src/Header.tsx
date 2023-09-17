import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HelpModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Help :3</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Help text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
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
              <Button type="button" onClick={setShowHelp}>
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
