import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from './Input';
import Output from './Output';
import { useState } from 'react';

function Body() {
  const [output, setOutput] = useState<string>('');

  function handleOutput(data: string) {
    setOutput(data);
  }

  return (
    <main>
      <Container className="my-3">
        <Row>
          <Col>
            <Input returnData={setOutput} />
          </Col>
          <Col>
            <Output output={output} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Body;
