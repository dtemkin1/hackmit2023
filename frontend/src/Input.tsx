import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { pdfjs, Document } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Input({ returnData }: { returnData: (data: string) => void }) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log('Uploading file...');

      const formData = new FormData();
      formData.append('file', file);

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch('PUT LINK HERE', {
          method: 'POST',
          body: formData,
        });

        const data = await result.json();

        console.log(data);
        returnData(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Card className="mh-100">
        <Card.Header className="text-center">Input</Card.Header>
        <Form noValidate>
          <Row className="p-3">
            <Form.Group as={Col} className="text-center">
              <Form.Label>Language</Form.Label>
              <Form.Select aria-label="Select language">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="zh">Chinese</option>
                <option value="ar">Arabic</option>
                <option value="es">French</option>
                <option value="ru">Russian</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className="text-center">
              <Form.Label>Grade (1-12)</Form.Label>
              <Form.Control aria-label="Select grade"></Form.Control>
            </Form.Group>
          </Row>
          <Row className="p-3">
            <Form.Group
              as={Col}
              controlId="formFile"
              className="text-center mb-3"
            >
              <Form.Label>Upload a PDF file</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <Col className="text-center">
              <Button
                className="max-width"
                disabled={file ? false : true}
                onClick={handleUpload}
              >
                <p>Ready to submit?</p>
                Click here!
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>{file && <Document file={file} />}</Col>
          </Row>
        </Form>
      </Card>
    </>
  );
}

export default Input;
