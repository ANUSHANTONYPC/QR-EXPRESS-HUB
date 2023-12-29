// App.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import QRCodeGenerator from './components/QRCodeGenerator';
import './App.css'; // Import a custom CSS file for additional styling

const App = () => {
  return (
    <div className="app-container">
      <Row>
        <Col md={6} className="mb-4 text-center">
          <h1 className="app-title">ℚℝ 𝔼𝕩𝕡𝕣𝕖𝕤𝕤 ℍ𝕦𝕓</h1>
        </Col>
      </Row>

      <Col md={6} className="mb-4 mt-3 d-flex justify-content-center">
        <Card className="shadow">
          <Card.Body>
            <QRCodeGenerator />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default App;
