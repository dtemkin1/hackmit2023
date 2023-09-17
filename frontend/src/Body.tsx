import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from './Input';
import Output from './Output';

function Body() {
  return (
    <main>
      <Container className="my-3">
        <Row>
          <Col>
            <Input />
          </Col>
          <Col>
            <Output />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Body;
