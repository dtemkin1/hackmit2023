import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

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
        <Row>
          <Col className="text-center">
            <input type="file" onChange={handleFileChange} />
            {/* <Button>Use Camera</Button> */}
          </Col>
          <Col className="text-center">
            <Button disabled={file ? false : true} onClick={handleUpload}>
              Upload
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>Language</Col>
          <Col>Grade</Col>
        </Row>
        <Row>
          <Col>{}</Col>
        </Row>
      </Card>
    </>
  );
}

export default Input;
