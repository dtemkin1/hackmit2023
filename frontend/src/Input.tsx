import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

function Input() {
  let [selectedFile, setSelectedFile] = useState(null);

  let onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  let onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('myFile', selectedFile, selectedFile.name);

    // Details of the uploaded file
    console.log(selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post('api/uploadfile', formData);
  };

  let fileData = () => {
    if (selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {selectedFile.name}</p>

          <p>File Type: {selectedFile.type}</p>

          <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  return (
    <>
      <Card className="mh-100">
        <Card.Header className="text-center">Input</Card.Header>
        <Row>
          <Col>
            <input type="file" onChange={onFileChange} />
            {/* <Button>Use Camera</Button> */}
          </Col>
          <Col>
            <Button onClick={onFileUpload}>Upload</Button>
          </Col>
        </Row>
        <Row>
          <Col>Language</Col>
          <Col>Grade</Col>
        </Row>
        <Row>
          <Col>File Viewer</Col>
        </Row>
      </Card>
    </>
  );
}

export default Input;
