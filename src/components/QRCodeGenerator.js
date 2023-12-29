// QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Col, Container, Row } from 'react-bootstrap';
import './QRCodeGenerator.css'; // Import a custom CSS file for additional styling

const QRCodeGenerator = () => {
  const [content, setContent] = useState('');

  return (
    <Container className="qr-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content"
            className="form-control mb-3 mt-3 custom-input"
          />
          {content && (
            <div className="qr-code-container">
              <QRCode value={content} />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default QRCodeGenerator;
