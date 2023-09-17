import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Output({ output }: { output: string }) {
  return (
    <>
      <Card className="mh-100">
        <Card.Header className="text-center">Output</Card.Header>
        <Row>
          <Col>
            <p>{output}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Output;
