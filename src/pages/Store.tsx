import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { json } from 'react-router-dom';
import StoreItem from '../components/StoreItem';
import burgers from '../data/burgers.json';

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} sm={2} lg={3}>
        {burgers.map((burger) => (
          <Col key={burger.id}>
            <StoreItem {...burger} />
          </Col>
        ))}
      </Row>
    </>
  );
}
