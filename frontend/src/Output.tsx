import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Output() {
  return (
    <>
      <Card className="mh-100">
        <Card.Header className="text-center">Output</Card.Header>
        <Row>
          <Col>
            <Button>Generate Solutions</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Download PDF</Button>
          </Col>
        </Row>
        <Row>
          <Col>File Viewer</Col>
        </Row>
      </Card>
    </>
  );
}

export default Output;
